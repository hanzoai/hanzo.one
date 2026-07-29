import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// pnpm nests, so resolve the real directory rather than trusting a bare
// specifier — esbuild's dependency prebundle does not re-run vite's resolver.
const reactNativeWeb = path.dirname(require.resolve("react-native-web/package.json"));

// hanzo.one runs @hanzo/ui components on the @hanzo/gui backend. gui is
// consumed at runtime — no compile-time style extraction — so this config is
// only the knobs a gui/Tamagui app needs on the web (same shape as
// ~/work/hanzo/world, the reference gui-on-Vite surface):
//
//   1. react-native -> react-native-web, the substrate gui primitives use
//   2. one React instance (dedupe), or the runtime splits and hooks break
//   3. TAMAGUI_TARGET / __DEV__, the defines the gui runtime reads
//   4. `.web.js` first, so packages in that ecosystem pick their web build
export default defineConfig({
  server: {
    host: true, // use 0.0.0.0 instead of ::
    port: 8080,
  },

  define: {
    "process.env.TAMAGUI_TARGET": JSON.stringify("web"),
    __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react-native": reactNativeWeb,
      // @hanzo/ui's theme toggle reaches for Next's <Script>; this is a Vite
      // SPA, so it resolves to the plain element (src/gui/next-script.tsx).
      "next/script": path.resolve(__dirname, "./src/gui/next-script.tsx"),
    },
    dedupe: ["react", "react-dom", "react-native-web"],
    extensions: [
      ".web.tsx", ".web.ts", ".web.jsx", ".web.js",
      ".mjs", ".tsx", ".ts", ".jsx", ".js", ".json",
    ],
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-dom/client", "react-native-web"],
    // react-native-svg only ships its web build behind `.web.js`; let vite's
    // own resolver handle it instead of the prebundler.
    exclude: ["react-native-svg"],
    esbuildOptions: {
      // react-native-web and some @hanzogui/* packages ship .js containing JSX.
      loader: { ".js": "jsx" },
      resolveExtensions: [
        ".web.tsx", ".web.ts", ".web.jsx", ".web.js",
        ".mjs", ".tsx", ".ts", ".jsx", ".js", ".json",
      ],
    },
  },

  build: {
    // No manualChunks: hoisting the gui/react vendors into sibling eager chunks
    // reordered module initialisation and the runtime hit a TDZ ("Cannot access
    // 'N' before initialization") before first paint. One entry chunk it is.
    chunkSizeWarningLimit: 3000,
  },
});

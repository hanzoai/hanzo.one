import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { hanzoguiPlugin } from "@hanzogui/vite-plugin";
import path from "path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// pnpm nests, so resolve the real directory rather than trusting a bare
// specifier — esbuild's dependency prebundle does not re-run vite's resolver.
const reactNativeWeb = path.dirname(require.resolve("react-native-web/package.json"));

// hanzo.one runs @hanzo/ui components on the @hanzo/gui backend, and gui's
// atomic CSS is EXTRACTED AT BUILD TIME by the standard compiler plugin —
// @hanzogui/vite-plugin, the same one ~/work/hanzo/admin builds every SPA with.
// Extraction turns each styled element into a plain className plus a rule in
// `dist/assets/*.css`, which the browser caches once instead of re-parsing an
// injected sheet on every document. The rest is the knobs a gui/Tamagui app
// needs on the web:
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

  plugins: [
    hanzoguiPlugin({
      // The umbrella the optimizing compiler scans for styled components.
      components: ["@hanzo/gui"],
      // Absolute: the extractor copies the config into a `.hanzogui/` temp dir
      // and re-resolves imports from there.
      config: path.resolve(__dirname, "src/gui/config.ts"),
      // The theme layer — every `--var` and `.t_*` rule the config declares.
      // Without this the gui runtime injects those ~146KB into a <style> tag on
      // every document; written to a file, vite hashes it into the one
      // `dist/assets/*.css` the browser caches, and the runtime scans that sheet
      // on boot and skips what is already there.
      outputCSS: path.resolve(__dirname, "src/styles/gui.css"),
      // This config already states the react-native/`.web.js` resolution the
      // plugin would otherwise supply; leaving both on gives vite two aliases
      // for `react-native` and two copies of react-native-web in the graph.
      disableResolveConfig: true,
    }),
    react(),
  ],

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

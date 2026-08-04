import React from "react";
import ReactDOM from "react-dom/client";
import { GuiProvider } from "@hanzo/gui";
import App from "./App";
import guiConfig from "./gui/config";
import { ToastProvider } from "./gui";
import "./styles/index.css";

// GuiProvider is the @hanzo/gui runtime, fed the ONE config (src/gui/config).
// Everything below it renders on the Hanzo design system; dark is the default
// theme here as it is on every other Hanzo surface.
//
// `disableInjectCSS` turns off ONE thing: the `<style href="hanzogui-css">` the
// provider otherwise renders with `config.getCSS()` inside it — 146KB of theme
// variables re-sent with every document and cached by nobody. The compiler
// writes that exact CSS to `src/styles/gui.css` (vite.config's `outputCSS`) and
// `styles/index.css` imports it, so it now arrives in the hashed, cached sheet
// instead. This flag is ONLY safe with the compiler configured — hanzo.app set
// it with no extractor anywhere and shipped 240 atomic classes with no rules,
// completely unstyled, through green builds. Verify with the checker in
// @hanzo/gui (`css-check.mjs --render`), which reads the rendered markup and
// every delivered sheet and fails when a class has no rule. Atomic rules are
// unaffected either way: they go to `#_hanzogui-styles` via insertStyleRules(),
// which this flag does not touch.
//
// ToastProvider holds the one toast queue and renders its viewport. It is
// mounted here because it is mounted ONCE, like the runtime it sits inside —
// nothing mounted it before, so every page that calls `useToast()` threw
// "useToast must be used within <ToastProvider>" and rendered a white screen.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GuiProvider config={guiConfig} defaultTheme="dark" disableInjectCSS>
      <ToastProvider>
        <App />
      </ToastProvider>
    </GuiProvider>
  </React.StrictMode>
);

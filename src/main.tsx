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
// ToastProvider holds the one toast queue and renders its viewport. It is
// mounted here because it is mounted ONCE, like the runtime it sits inside —
// nothing mounted it before, so every page that calls `useToast()` threw
// "useToast must be used within <ToastProvider>" and rendered a white screen.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GuiProvider config={guiConfig} defaultTheme="dark">
      <ToastProvider>
        <App />
      </ToastProvider>
    </GuiProvider>
  </React.StrictMode>
);

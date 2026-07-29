import React from "react";
import ReactDOM from "react-dom/client";
import { GuiProvider } from "@hanzo/gui";
import App from "./App";
import guiConfig from "./gui/config";
import "./styles/index.css";

// GuiProvider is the @hanzo/gui runtime, fed the ONE config (src/gui/config).
// Everything below it renders on the Hanzo design system; dark is the default
// theme here as it is on every other Hanzo surface.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GuiProvider config={guiConfig} defaultTheme="dark">
      <App />
    </GuiProvider>
  </React.StrictMode>
);

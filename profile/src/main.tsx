import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "styled-components";

import App from "./App.tsx";
import GlobalStyles from "./styles/global.ts";
import { defaultTheme } from "./styles/themes/defaultTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider>
        <GlobalStyles />
        <App />
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);

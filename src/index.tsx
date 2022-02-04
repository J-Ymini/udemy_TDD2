import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { GlobalStyle, theme } from "src/styles";
import { ThemeProvider } from "styled-components";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("src/mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

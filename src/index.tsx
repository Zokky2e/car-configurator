import { Global, css } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Global
      styles={css`
        :root {
          --nav-bg: #2e2e38;
          --nav-text: #f1f1f4;
          --nav-button-border: #505062;
          --background: #f1f1f4;
          --basic-white: #ffffff;
          --primary-1: #3f3fe4;
          --modal-shadow: rgba(0, 0, 0, 0.06);
        }
        body {
          margin: 0;
          font-family: "Inter";
          color: var(--nav-bg);
          background-color: var(--background);
        }
      `}
    />
    <App />
  </BrowserRouter>
);

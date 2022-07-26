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
        @import url("https://rsms.me/inter/inter.css");
        @import url("http://fonts.cdnfonts.com/css/optician-sans");
        :root {
          --nav-bg: #2e2e38;
          --nav-text: #f1f1f4;
          --nav-button-border: #505062;
          --background: #f1f1f4;
          --background-7: #fcfcfd;
          --border-4: #9d9daf;
          --border-5: #c7c7d1;
          --icon-6: #f1f1f4;
          --basic-white: #ffffff;
          --primary-1: #3f3fe4;
          --primary: #1e1ed2;
          --text-1: #2e2e38;
          --text-2: #505062;
          --text-3: #73738c;
          --text-4: #9d9daf;
          --text-5: #c7c7d1;
          --error: #d2341e;
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

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "primeflex/primeflex.css";
import { SnackbarProvider } from 'notistack'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.Fragment>
);

reportWebVitals();

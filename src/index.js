import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { ContextProvider } from "./context/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);

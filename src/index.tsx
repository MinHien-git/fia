import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/_globals.scss";
import "./styles/_typography.scss";

const rootElement = document.getElementById("root") as
  | Element
  | DocumentFragment;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

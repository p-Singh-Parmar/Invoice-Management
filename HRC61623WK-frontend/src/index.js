import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import getData from "./components/services/data";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <getData />
  </React.StrictMode>,
  document.getElementById("root")
);

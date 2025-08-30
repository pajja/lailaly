import React from "react";
import ReactDOM from "react-dom"; // Remove "/client"
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

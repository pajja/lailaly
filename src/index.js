import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  // Use hydrateRoot for server-side rendered content (react-snap)
  hydrateRoot(rootElement, <App />);
} else {
  // Use createRoot for client-side rendering
  const root = createRoot(rootElement);
  root.render(<App />);
}

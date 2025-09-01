import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import GeometryAndDecolonisation from "./pages/Geometry-and-decolonisation";
import Assemblages from "./pages/Assemblages";
import ChanceAndSequence from "./pages/Chance-and-sequence";
import Derive from "./pages/Derive";
import Futures from "./pages/Futures";
import Womanhood from "./pages/Womanhood";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HelmetProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/geometry-and-decolonisation"
              element={<GeometryAndDecolonisation />}
            />
            <Route path="/assemblages" element={<Assemblages />} />
            <Route
              path="/chance-and-sequence"
              element={<ChanceAndSequence />}
            />
            <Route path="/derive" element={<Derive />} />
            <Route path="/futures" element={<Futures />} />
            <Route path="/womanhood" element={<Womanhood />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/instagram.css";

function Insta() {
  return (
    <div className="ig-logo">
      <Link
        className="ig"
        to="https://www.instagram.com/el__sorab_/"
        target="_blank"
      >
        instagram
      </Link>
    </div>
  );
}

export default Insta;

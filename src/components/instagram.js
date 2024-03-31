import React from "react";
import { Link } from "react-router-dom";
import "../styles/instagram.css";
import ig from "../assets/insta-logo.png";

function Insta() {
  return (
    <div className="container ig-logo">
      <div className="row row-cols-1">
        <div className="col text-center">
          <img src={ig} alt="laila sorabji" />
        </div>
        <div className="col text-center">
          <Link
            className="ig"
            to="https://www.instagram.com/el__sorab_/"
            target="_blank"
          >
            instagram
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Insta;

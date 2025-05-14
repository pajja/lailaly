import React, { useState } from "react";
import "../styles/Home.css";
import Insta from "../components/instagram";
import { Link } from "react-router-dom";
import "../styles/nav-bar.css";
import homeImages from "../components/imagesHome";
import Magnifier from "../components/magnifier";
import "../styles/magnifier.css";

function Home() {
  const [background, setBackground] = useState(null); // Start with no image background
  const [showVideo, setShowVideo] = useState(true); // Start with video showing

  const imageList = [
    homeImages.geometryAndDecolonisationBackground,
    homeImages.assemblagesBackground,
    homeImages.chanceAndSequenceBackground,
    homeImages.deriveBackground,
    homeImages.futuresBackground,
    homeImages.womanhoodBackground,
  ];

  return (
    <div
      className="container-fluid"
      style={{ overflowX: "hidden", overflowY: "hidden" }}
    >
      <div className="row">
        <div className="col-lg-2">
          <ul className="ul-home">
            <li>
              <Link
                onMouseEnter={() => {
                  setBackground(null); // Don't show any background image
                }}
                className="home"
                to="/"
              >
                laila sorabji
              </Link>
            </li>
          </ul>
          <nav className="nav-bar">
            <ul style={{ display: "block" }}>
              <li>
                <Link
                  onMouseEnter={() => {
                    setBackground(null); // Don't show any background image
                  }}
                  className="page"
                  to="/geometry-and-decolonisation"
                >
                  geometry and decolonisation
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() => {
                    setBackground(null); // Don't show any background image
                  }}
                  className="page"
                  to="/assemblages"
                >
                  assemblages
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() => {
                    setBackground(null); // Don't show any background image
                  }}
                  className="page"
                  to="/chance-and-sequence"
                >
                  chance and sequence
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() => {
                    setBackground(null); // Don't show any background image
                  }}
                  className="page"
                  to="/derive"
                >
                  dérive
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() => {
                    setBackground(null); // Don't show any background image
                  }}
                  className="page"
                  to="/futures"
                >
                  futures
                </Link>
              </li>
              <li>
                <Link
                  onMouseEnter={() => {
                    setBackground(null); // Don't show any background image
                  }}
                  className="page"
                  to="/womanhood"
                >
                  womanhood
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-8 col-background-home">
          {showVideo && (
            <video
              src={homeImages.backgroundVideo}
              autoPlay
              muted
              loop
              className="background-image-home visible"
            />
          )}
          {imageList.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background ${index}`}
              className={`background-image-home ${
                background === image ? "visible" : ""
              }`}
            />
          ))}
        </div>
        <div className="col-lg-2 ig-logo">
          <Insta />
        </div>
      </div>
    </div>
  );
}

export default Home;

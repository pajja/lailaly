import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Insta from "../components/instagram";
import { Link } from "react-router-dom";
import "../styles/nav-bar.css";
import homeImages from "../components/imagesHome";
import Magnifier from "../components/magnifier";
import "../styles/magnifier.css";
import BackgroundVideo from "../components/backgroundVideo";
import backgroundNoise from "../assets/home-pic/background-noise.png";

function Home() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile and if user has already started the experience
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    // Check if user has already started the experience in this session
    const hasStartedBefore =
      sessionStorage.getItem("hasStartedExperience") === "true";
    setHasStarted(hasStartedBefore);

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Function to handle starting the experience
  const handleStart = () => {
    setHasStarted(true);
    // Save to session storage so it persists during navigation
    sessionStorage.setItem("hasStartedExperience", "true");
  };

  const imageList = [
    homeImages.geometryAndDecolonisationBackground,
    homeImages.assemblagesBackground,
    homeImages.chanceAndSequenceBackground,
    homeImages.deriveBackground,
    homeImages.futuresBackground,
    homeImages.womanhoodBackground,
  ];

  // Title component that will be shared across layouts
  const TitleComponent = () => (
    <ul className="ul-home">
      <li>
        <Link className="home" to="/">
          laila sorabji
        </Link>
      </li>
    </ul>
  );

  // Start screen component for mobile view
  const StartScreen = () => {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${backgroundNoise})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div style={{ position: "absolute", top: "0px", left: "12px" }}>
          <TitleComponent />
        </div>
        <button className="start-button" onClick={handleStart}>
          start
        </button>
      </div>
    );
  };

  // Show start screen only on mobile when not started
  if (isMobile && !hasStarted) {
    return <StartScreen />;
  }

  return (
    <div
      className="container-fluid"
      style={{
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <BackgroundVideo />
      <div className="row">
        <div className="col-lg-2">
          <TitleComponent />
          <nav className="nav-bar">
            <ul style={{ display: "block" }}>
              <li>
                <Link className="page" to="/geometry-and-decolonisation">
                  geometry and decolonisation
                </Link>
              </li>
              <li>
                <Link className="page" to="/assemblages">
                  assemblages
                </Link>
              </li>
              <li>
                <Link className="page" to="/chance-and-sequence">
                  chance and sequence
                </Link>
              </li>
              <li>
                <Link className="page" to="/derive">
                  dérive
                </Link>
              </li>
              <li>
                <Link className="page" to="/futures">
                  futures
                </Link>
              </li>
              <li>
                <Link className="page" to="/womanhood">
                  womanhood
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-8 col-background-home"></div>
        <div className="col-lg-2 ig-logo">
          <Insta />
        </div>
      </div>
    </div>
  );
}

export default Home;

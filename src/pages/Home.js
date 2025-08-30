import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "../styles/Home.css";
import Insta from "../components/instagram";
import { Link } from "react-router-dom";
import "../styles/nav-bar.css";
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
      <Helmet>
        <title>laila sorabji</title>
        <meta
          name="description"
          content="Laila Sorabji is a contemporary artist exploring themes of abstraction, womanhood, and decolonisation. Discover and explore her innovative visual art projects."
        />
        <meta
          name="keywords"
          content="Laila Sorabji, contemporary artist, visual art, feminist art, decolonial art, geometry, decolonisation, assemblages, derive, futures, womanhood, artist portfolio, contemporary art"
        />

        {/* Open Graph tags for social media */}
        <meta property="og:title" content="laila sorabji" />
        <meta
          property="og:description"
          content="Laila Sorabji is a contemporary artist exploring themes of abstraction, womanhood, and decolonisation. Discover and explore her innovative visual art projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lailasorabji.netlify.app" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="laila sorabji" />
        <meta
          name="twitter:description"
          content="Laila Sorabji is a contemporary artist exploring themes of abstraction, womanhood, and decolonisation. Discover and explore her innovative visual art projects."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lailasorabji.netlify.app" />

        {/* Additional meta tags for artist portfolio */}
        <meta name="author" content="Laila Sorabji" />
        <meta name="robots" content="index, follow" />
      </Helmet>

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

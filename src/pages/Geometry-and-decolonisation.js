import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import "../styles/project-name.css";
import ViewerGeoDec from "../components/viewer-geo-dec";
import GeoAndDecComp1 from "../components/geoAndDecComp1";
import GeoAndDecComp2 from "../components/geoAndDecComp2";
import GeoAndDecComp3 from "../components/geoAndDecComp3";
import GeoAndDecComp4 from "../components/geoAndDecComp4";
import "../styles/nav-bar.css";

const GeometryAndDecolonisation = () => {
  return (
    <>
      <Helmet>
        <title>geometry and decolonisation</title>
        <meta
          name="description"
          content="Explore Laila Sorabji's Geometry and Decolonisation project."
        />
        <meta
          name="keywords"
          content="Laila Sorabji, geometry and decolonisation, decolonial art, contemporary art, geometric art, postcolonial theory, visual art, artist portfolio"
        />

        {/* Open Graph tags for social media */}
        <meta
          property="og:title"
          content="geometry and decolonisation - laila sorabji"
        />
        <meta
          property="og:description"
          content="Explore Laila Sorabji's Geometry and Decolonisation project."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lailasorabji.netlify.app/geometry-and-decolonisation"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="geometry and decolonisation - laila sorabji"
        />
        <meta
          name="twitter:description"
          content="Explore Laila Sorabji's Geometry and Decolonisation project."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://lailasorabji.netlify.app/geometry-and-decolonisation"
        />
      </Helmet>

      <div
        className="container-fluid"
        style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <div className="row">
          <div className="col-lg-2">
            <NavBar />
          </div>
          <div className="col-lg-8 main">
            <ViewerGeoDec
              composition4={<GeoAndDecComp4 />}
              composition1={<GeoAndDecComp1 />}
              composition2={<GeoAndDecComp2 />}
              composition3={<GeoAndDecComp3 />}
            />
          </div>
          <div className="col-lg-2 times-new-roman project-name">
            geometry and decolonisation
          </div>
        </div>
      </div>
    </>
  );
};

export default GeometryAndDecolonisation;

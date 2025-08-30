import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import assemblagesImages from "../components/imagesAssemblages";
import "../styles/project-name.css";
import AssemblagesComp from "../components/assemblagesComp";
import Viewer from "../components/viewer";
import AssemblagesComp2 from "../components/assemblagesComp2";
import "../styles/nav-bar.css";

function Assemblages() {
  return (
    <>
      <Helmet>
        <title>assemblages</title>
        <meta
          name="description"
          content="Explore Laila Sorabji's Assemblages project."
        />
        <meta
          name="keywords"
          content="Laila Sorabji, assemblages, contemporary art, visual art, artist portfolio"
        />

        {/* Open Graph tags for social media */}
        <meta property="og:title" content="assemblages - laila sorabji" />
        <meta
          property="og:description"
          content="Explore Laila Sorabji's Assemblages project."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lailasorabji.netlify.app/assemblages"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="assemblages - laila sorabji" />
        <meta
          name="twitter:description"
          content="Explore Laila Sorabji's Assemblages project."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://lailasorabji.netlify.app/assemblages"
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
          <div className="col-lg-8 main times-new-roman">
            <Viewer
              images={assemblagesImages}
              composition={<AssemblagesComp />}
              composition2={<AssemblagesComp2 />}
            />
          </div>
          <div className="col-lg-2 times-new-roman project-name">
            assemblages
          </div>
        </div>
      </div>
    </>
  );
}

export default Assemblages;

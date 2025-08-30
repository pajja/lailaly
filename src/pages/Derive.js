import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import "../styles/project-name.css";
import ViewerDerive from "../components/viewerDerive";
import DeriveComp1 from "../components/deriveComp1";
import DeriveComp2 from "../components/deriveComp2";
import DeriveComp3 from "../components/deriveComp3";
import DeriveComp4 from "../components/deriveComp4";
import DeriveComp5 from "../components/deriveComp5";
import DeriveComp6 from "../components/deriveComp6";
import DeriveComp7 from "../components/deriveComp7";
import "../styles/nav-bar.css";

function Derive() {
  return (
    <>
      <Helmet>
        <title>dérive</title>
        <meta
          name="description"
          content="Explore Laila Sorabji's Dérive project."
        />
        <meta
          name="keywords"
          content="Laila Sorabji, dérive, derive, contemporary art, visual art, artist portfolio"
        />

        {/* Open Graph tags for social media */}
        <meta property="og:title" content="dérive - laila sorabji" />
        <meta
          property="og:description"
          content="Explore Laila Sorabji's Dérive project."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lailasorabji.netlify.app/derive"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="dérive - laila sorabji" />
        <meta
          name="twitter:description"
          content="Explore Laila Sorabji's Dérive project."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lailasorabji.netlify.app/derive" />
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
            <ViewerDerive
              composition1={<DeriveComp1 />}
              composition2={<DeriveComp2 />}
              composition3={<DeriveComp3 />}
              composition4={<DeriveComp4 />}
              composition5={<DeriveComp5 />}
              composition6={<DeriveComp6 />}
              composition7={<DeriveComp7 />}
            />
          </div>
          <div className="col-lg-2 times-new-roman project-name">dérive</div>
        </div>
      </div>
    </>
  );
}

export default Derive;

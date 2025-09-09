import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import "../styles/project-name.css";
import "../styles/futuresComp4.css";
import ViewerFutures from "../components/viewer-futures";
import FuturesComp1 from "../components/futuresComp1";
import FuturesComp2 from "../components/futuresComp2";
import FuturesComp3 from "../components/futuresComp3";
import FuturesComp4 from "../components/futuresComp4";
import ShapesFutures1 from "../assets/futures/IMG_4694_edited-2.jpg";
import ShapesFutures2 from "../assets/futures/IMG_4993_edited.jpg";
import "../styles/nav-bar.css";

function Futures() {
  return (
    <>
      <Helmet>
        <title>futures</title>
        <meta
          name="description"
          content="Explore Laila Sorabji's Futures project."
        />
        <meta
          name="keywords"
          content="Laila Sorabji, futures, contemporary art, oil painting, visual art, artist portfolio"
        />

        {/* Open Graph tags for social media */}
        <meta property="og:title" content="futures - laila sorabji" />
        <meta
          property="og:description"
          content="Explore Laila Sorabji's Futures project."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lailasorabji.netlify.app/futures"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="futures - laila sorabji" />
        <meta
          name="twitter:description"
          content="Explore Laila Sorabji's Futures project."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lailasorabji.netlify.app/futures" />
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
            <ViewerFutures
              composition1={<FuturesComp1 />}
              composition2={<FuturesComp2 />}
              composition3={<FuturesComp3 />}
              composition4={<FuturesComp4 />}
              composition5={
                <div className="image-futures5">
                  <img
                    alt="Futures series - Oil on unprimed canvas 1"
                    src={ShapesFutures1}
                  ></img>
                  <p className="image-description times-new-roman">
                    Oil on unprimed canvas
                  </p>
                </div>
              }
              composition6={
                <div className="image-futures6">
                  <img
                    alt="Futures series - Oil on unprimed canvas 2"
                    src={ShapesFutures2}
                  ></img>
                  <p className="image-description times-new-roman">
                    Oil on unprimed canvas{" "}
                  </p>
                </div>
              }
            />
          </div>
          <div className="col-lg-2 times-new-roman project-name">futures</div>
        </div>
      </div>
    </>
  );
}

export default Futures;

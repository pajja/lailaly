import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import "../styles/project-name.css";
import ViewerWomanhood from "../components/viewerWomanhood";
import mindMap1 from "../assets/womanhood/womanhood-starting-points-1.png";
import "../styles/womanhoodComp.css";
import WomanhoodComp2 from "../components/womanhoodComp2";
import WomanhoodComp3 from "../components/womanhoodComp3";
import WomanhoodComp4 from "../components/womanhoodComp4";
import mindMap2 from "../assets/womanhood/another-map.png";
import WomanhoodComp6 from "../components/womanhoodComp6";
import WomanhoodComp8 from "../components/womanhoodComp8";
import WomanhoodComp9 from "../components/womanhoodComp9";
import WomanhoodComp10 from "../components/womanhoodComp10";
import WomanhoodComp11 from "../components/womanhoodComp11";
import WomanhoodComp12 from "../components/womanhoodComp12";
import WomanhoodComp14 from "../components/womanhoodComp14";
import WomanhoodComp15 from "../components/womanhoodComp15";
import WomanhoodComp7 from "../components/womanhoodComp7";
import WomanhoodComp16 from "../components/womanhoodComp16";
import WomanhoodComp13 from "../components/womanhoodComp13";
import "../styles/nav-bar.css";

function Womanhood() {
  return (
    <>
      <Helmet>
        <title>womanhood</title>
        <meta
          name="description"
          content="Explore Laila Sorabji's Womanhood project."
        />
        <meta
          name="keywords"
          content="Laila Sorabji, womanhood, female identity, feminist art, contemporary art, printmaking, mind maps, embodiment, women artists, visual art, artist portfolio"
        />

        {/* Open Graph tags for social media */}
        <meta property="og:title" content="womanhood - laila sorabji" />
        <meta
          property="og:description"
          content="Explore Laila Sorabji's Womanhood project."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lailasorabji.netlify.app/womanhood"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="womanhood - laila sorabji" />
        <meta
          name="twitter:description"
          content="Explore Laila Sorabji's Womanhood project."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://lailasorabji.netlify.app/womanhood"
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
            <ViewerWomanhood
              composition1={
                <div className="mind-map">
                  <img
                    src={mindMap1}
                    alt="Womanhood series - Starting Mind Map"
                  />
                  <p className="image-description font14px times-new-roman black">
                    Starting mind map{" "}
                  </p>
                </div>
              }
              composition2={<WomanhoodComp2 />}
              composition3={<WomanhoodComp3 />}
              composition4={<WomanhoodComp4 />}
              composition5={
                <div className="mind-map">
                  <img
                    src={mindMap2}
                    alt="Womanhood series - Mind Map for imagery used in prints"
                  />
                  <p
                    className="image-description font14px times-new-roman black"
                    style={{ marginTop: "20px" }}
                  >
                    Mind map for imagery used in prints{" "}
                  </p>
                </div>
              }
              composition6={<WomanhoodComp6 />}
              composition7={<WomanhoodComp7 />}
              composition8={<WomanhoodComp8 />}
              composition9={<WomanhoodComp9 />}
              composition10={<WomanhoodComp10 />}
              composition11={<WomanhoodComp11 />}
              composition12={<WomanhoodComp12 />}
              composition13={<WomanhoodComp13 />}
              composition14={<WomanhoodComp14 />}
              composition15={<WomanhoodComp15 />}
              composition16={<WomanhoodComp16 />}
            />
          </div>
          <div className="col-lg-2 times-new-roman project-name">womanhood</div>
        </div>
      </div>
    </>
  );
}

export default Womanhood;

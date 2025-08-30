import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import "../styles/project-name.css";
import ChanceAndSequenceComp from "../components/chanceAndSequenceComp";

function ChanceAndSequence() {
  return (
    <>
      <Helmet>
        <title>chance and sequence</title>
        <meta
          name="description"
          content="Explore Laila Sorabji's Chance and Sequence project."
        />
        <meta
          name="keywords"
          content="Laila Sorabji, chance and sequence, contemporary art, visual art, patterns, photography, artist portfolio"
        />

        {/* Open Graph tags for social media */}
        <meta
          property="og:title"
          content="chance and sequence - laila sorabji"
        />
        <meta
          property="og:description"
          content="Explore Laila Sorabji's Chance and Sequence project."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lailasorabji.netlify.app/chance-and-sequence"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="chance and sequence - laila sorabji"
        />
        <meta
          name="twitter:description"
          content="Explore Laila Sorabji's Chance and Sequence project."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://lailasorabji.netlify.app/chance-and-sequence"
        />
      </Helmet>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <NavBar />
          </div>
          <div className="col-lg-8 times-new-roman">
            <ChanceAndSequenceComp />
          </div>
          <div className="col-lg-2 times-new-roman project-name">
            chance and sequence
          </div>
        </div>
      </div>
    </>
  );
}

export default ChanceAndSequence;

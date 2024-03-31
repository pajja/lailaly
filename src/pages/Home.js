import React from "react";
import "../styles/Home.css";
import Background from "../assets/home-pic/home-pic.png";
import NavBar from "../components/nav-bar";
import Insta from "../components/instagram";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 nav-bar">
          <NavBar />
        </div>
        <div className="col background">
          <img
            src={Background}
            alt="laila sorabji"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-sm-3 ig-logo">
          <Insta />
        </div>
      </div>
    </div>
  );
}

export default Home;

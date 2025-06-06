import React from "react";
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
  );
};

export default GeometryAndDecolonisation;

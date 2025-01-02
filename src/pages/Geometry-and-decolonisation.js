import React from "react";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import "../styles/project-name.css";
import ViewerGeoDec from "../components/viewer-geo-dec";
import GeoAndDecComp1 from "../components/geoAndDecComp1";
import GeoAndDecComp2 from "../components/geoAndDecComp2";
import GeoAndDecComp3 from "../components/geoAndDecComp3";

const GeometryAndDecolonisation = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <NavBar />
        </div>
        <div className="col-sm-8">
          <ViewerGeoDec
            composition1={<GeoAndDecComp1 />}
            composition2={<GeoAndDecComp2 />}
            composition3={<GeoAndDecComp3 />}
          />
        </div>
        <div className="col-sm-2 times-new-roman project-name">
          geometry and decolonisation
        </div>
      </div>
    </div>
  );
};

export default GeometryAndDecolonisation;

import React from "react";
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
        <div className="col-lg-2 times-new-roman project-name">assemblages</div>
      </div>
    </div>
  );
}

export default Assemblages;

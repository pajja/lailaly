import React from "react";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import assemblagesImages from "../components/imagesAssemblages";
import "../styles/project-name.css";
import AssemblagesComp from "../components/assemblagesComp";
import Viewer from "../components/viewer";
import AssemblagesComp2 from "../components/assemblagesComp2";

function Assemblages() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xxl-2">
          <NavBar />
        </div>
        <div className="col-xxl-8 times-new-roman">
          <Viewer
            images={assemblagesImages}
            composition={<AssemblagesComp />}
            composition2={<AssemblagesComp2 />}
          />
        </div>
        <div className="col-xxl-2 times-new-roman project-name">
          assemblages
        </div>
      </div>
    </div>
  );
}

export default Assemblages;

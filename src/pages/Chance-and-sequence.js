import React from "react";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import "../styles/project-name.css";
import ChanceAndSequenceComp from "../components/chanceAndSequenceComp";

function ChanceAndSequence() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xxl-2">
          <NavBar />
        </div>
        <div className="col-xxl-8 times-new-roman">
          <ChanceAndSequenceComp />
        </div>
        <div className="col-xxl-2 times-new-roman project-name">
          chance and sequence
        </div>
      </div>
    </div>
  );
}

export default ChanceAndSequence;

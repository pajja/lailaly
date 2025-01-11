import React from "react";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import "../styles/project-name.css";
import ViewerFutures from "../components/viewer-futures";
import FuturesComp1 from "../components/futuresComp1";
import FuturesComp2 from "../components/futuresComp2";
import FuturesComp3 from "../components/futuresComp3";
import FuturesComp4 from "../components/futuresComp4";
import ShapesFutures1 from "../assets/futures/IMG_4694_edited-2.jpg";
import ShapesFutures2 from "../assets/futures/IMG_4993_edited.jpg";

function Futures() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xxl-2">
          <NavBar />
        </div>
        <div className="col-xxl-8">
          <ViewerFutures
            composition1={<FuturesComp1 />}
            composition2={<FuturesComp2 />}
            composition3={<FuturesComp3 />}
            composition4={<FuturesComp4 />}
            composition5={
              <div style={{ paddingTop: "10px" }}>
                <img src={ShapesFutures1}></img>
                <p className="image-description times-new-roman">
                  Oil on unprimed canvas
                </p>
              </div>
            }
            composition6={
              <div style={{ paddingTop: "10px" }}>
                <img src={ShapesFutures2}></img>
                <p className="image-description times-new-roman">
                  Oil on unprimed canvas{" "}
                </p>
              </div>
            }
          />
        </div>
        <div className="col-xxl-2 times-new-roman project-name">futures</div>
      </div>
    </div>
  );
}

export default Futures;

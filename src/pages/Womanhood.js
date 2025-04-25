import React from "react";
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
                <img src={mindMap1} alt="Starting Mind Map" />
                <p className="image-description times-new-roman black">
                  Starting mind map{" "}
                </p>
              </div>
            }
            composition2={<WomanhoodComp2 />}
            composition3={<WomanhoodComp3 />}
            composition4={<WomanhoodComp4 />}
            composition5={
              <div className="mind-map">
                <img src={mindMap2} alt="Mind Map for imagery used in prints" />
                <p
                  className="image-description times-new-roman black"
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
  );
}

export default Womanhood;

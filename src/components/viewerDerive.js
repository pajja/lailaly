import React, { useState } from "react";
import "../styles/viewer.css";
import greyArrow1 from "../assets/arrows/grey-arrow1.png";
import greyArrow2 from "../assets/arrows/grey-arrow2.png";

const ViewerDerive = ({
  composition1,
  composition2,
  composition3,
  composition4,
  composition5,
  composition6,
  composition7,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCompositions = 7;

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalCompositions);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalCompositions) % totalCompositions);
  };

  return (
    <div className="viewer">
      <div className="container">
        <div className="row">
          <div
            className="col-1"
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button className="viewer-button" onClick={handlePrev}>
              <img
                src={greyArrow2}
                alt="Click for Previous"
                className="arrow-image"
              />
            </button>
          </div>
          <div
            className="col-10"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <div className="composition-container-viewer">
              {currentIndex === 0 && <div>{composition1}</div>}
              {currentIndex === 1 && <div>{composition2}</div>}
              {currentIndex === 2 && <div>{composition3}</div>}
              {currentIndex === 3 && <div>{composition4}</div>}
              {currentIndex === 4 && <div>{composition5}</div>}
              {currentIndex === 5 && <div>{composition6}</div>}
              {currentIndex === 6 && <div>{composition7}</div>}
            </div>
          </div>
          <div
            className="col-1"
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <button className="viewer-button" onClick={handleNext}>
              <img
                src={greyArrow1}
                alt="Click for Next"
                className="arrow-image"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewerDerive;

import React, { useState } from "react";
import "../styles/viewer.css";
import greyArrow1 from "../assets/arrows/grey-arrow1.png";
import greyArrow2 from "../assets/arrows/grey-arrow2.png";

const ViewerWomanhood = ({
  composition1,
  composition2,
  composition3,
  composition4,
  composition5,
  composition6,
  composition7,
  composition8,
  composition9,
  composition10,
  composition11,
  composition12,
  composition13,
  composition14,
  composition15,
  composition16,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCompositions = 16;

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
              <img src={greyArrow2} alt="Previous" className="arrow-image" />
            </button>{" "}
          </div>
          <div
            className="col-10"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="composition-container-viewer">
              {currentIndex === 0 && <div>{composition1}</div>}
              {currentIndex === 1 && <div>{composition2}</div>}
              {currentIndex === 2 && <div>{composition3}</div>}
              {currentIndex === 3 && <div>{composition4}</div>}
              {currentIndex === 4 && <div>{composition5}</div>}
              {currentIndex === 5 && <div>{composition6}</div>}
              {currentIndex === 6 && <div>{composition7}</div>}
              {currentIndex === 7 && <div>{composition8}</div>}
              {currentIndex === 8 && <div>{composition9}</div>}
              {currentIndex === 9 && <div>{composition10}</div>}
              {currentIndex === 10 && <div>{composition11}</div>}
              {currentIndex === 11 && <div>{composition12}</div>}
              {currentIndex === 12 && <div>{composition13}</div>}
              {currentIndex === 13 && <div>{composition14}</div>}
              {currentIndex === 14 && <div>{composition15}</div>}
              {currentIndex === 15 && <div>{composition16}</div>}
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
              <img src={greyArrow1} alt="Next" className="arrow-image" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewerWomanhood;

import React, { useState } from "react";
import "../styles/viewer.css";
import greyArrow1 from "../assets/arrows/grey-arrow1.png";
import greyArrow2 from "../assets/arrows/grey-arrow2.png";

const ViewerGeoDec = ({ composition1, composition2, composition3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCompositions = 3; // We have only 3 compositions

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalCompositions);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalCompositions) % totalCompositions);
  };

  return (
    <div className="viewer">
      <button className="viewer-button" onClick={handlePrev}>
        <img src={greyArrow2} alt="Previous" className="arrow-image" />
      </button>
      <div className="composition-container-viewer">
        {currentIndex === 0 && <div>{composition1}</div>}
        {currentIndex === 1 && <div>{composition2}</div>}
        {currentIndex === 2 && <div>{composition3}</div>}
      </div>
      <button className="viewer-button" onClick={handleNext}>
        <img src={greyArrow1} alt="Next" className="arrow-image" />
      </button>
    </div>
  );
};

export default ViewerGeoDec;

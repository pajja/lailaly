import React, { useState } from "react";
import "../styles/viewer.css";
import greyArrow1 from "../assets/arrows/grey-arrow1.png";
import greyArrow2 from "../assets/arrows/grey-arrow2.png";

const Viewer = ({ images, composition, composition2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % (images.length + 2)); // +1 to include the component
  };

  const handlePrev = () => {
    setCurrentIndex(
      (((currentIndex - 1 + (images.length + 2)) % (images.length + 2)) +
        (images.length + 2)) %
        (images.length + 2)
    );
  };

  return (
    <div className="viewer">
      <button className="viewer-button" onClick={handlePrev}>
        <img src={greyArrow2} alt="Previous" className="arrow-image" />
      </button>
      <div className="image-container-viewer">
        {currentIndex < images.length ? (
          <>
            <img
              src={images[currentIndex].src}
              alt={`Image ${currentIndex + 1}`}
            />
            <p className="image-description">
              {images[currentIndex].description}
            </p>
          </>
        ) : currentIndex === images.length ? (
          // <ImagesAssemblagesComp />
          <div>{composition}</div>
        ) : (
          <div>{composition2}</div>
        )}
      </div>
      <button className="viewer-button" onClick={handleNext}>
        <img src={greyArrow1} alt="Next" className="arrow-image" />
      </button>
    </div>
  );
};

export default Viewer;

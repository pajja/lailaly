import React, { useState } from "react";
import "../styles/viewer.css";
import "../styles/assemblagesComp.css";
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
            <div>
              {currentIndex < images.length ? (
                <>
                  <div className="image-assemblages">
                    <img
                      id={images[currentIndex].id}
                      src={images[currentIndex].src}
                      alt={`Assemblages series ${currentIndex + 1}`}
                    />
                    <p className="image-description">
                      {images[currentIndex].description}
                    </p>
                  </div>
                </>
              ) : currentIndex === images.length ? (
                <div>{composition}</div>
              ) : (
                <div>{composition2}</div>
              )}
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

export default Viewer;

import React, { useEffect } from "react";
import "../styles/geoAndDecComp1.css";
import "../styles/deriveComp3.css";
import Poleroid1 from "../assets/derive/IMG_3790_edited.jpg";
import Poleroid2 from "../assets/derive/IMG_3789_edited.jpg";
import Poleroid3 from "../assets/derive/IMG_3791_edited.jpg";

const DeriveComp3 = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const content = document.querySelector(".scroll-content");
    const thumb = document.querySelector(".scrollbar-thumb");

    // Helper functions to disable and enable text selection
    const disableTextSelection = () => {
      document.body.style.userSelect = "none"; // Disable text selection
      document.body.style.webkitUserSelect = "none";
      document.body.style.mozUserSelect = "none";
      document.body.style.msUserSelect = "none";
    };

    const enableTextSelection = () => {
      document.body.style.userSelect = ""; // Re-enable text selection
      document.body.style.webkitUserSelect = "";
      document.body.style.mozUserSelect = "";
      document.body.style.msUserSelect = "";
    };

    const updateThumbPosition = () => {
      const contentWidth = content.scrollWidth;
      const containerWidth = container.clientWidth;
      const scrollLeft = content.scrollLeft;

      const thumbWidth = Math.max(
        (containerWidth / contentWidth) * containerWidth,
        50
      );
      const thumbLeft = (scrollLeft / contentWidth) * containerWidth;

      thumb.style.width = `${thumbWidth}px`;
      thumb.style.left = `${thumbLeft}px`;
    };

    content.addEventListener("scroll", updateThumbPosition);
    updateThumbPosition();

    thumb.addEventListener("mousedown", function (e) {
      disableTextSelection(); // Disable text selection on drag
      const startX = e.clientX;
      const startLeft = parseFloat(thumb.style.left);

      const onMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newLeft = Math.min(
          container.clientWidth - thumb.clientWidth,
          Math.max(0, startLeft + deltaX)
        );
        content.scrollLeft =
          (newLeft / container.clientWidth) * content.scrollWidth;
      };

      const onMouseUp = () => {
        enableTextSelection(); // Re-enable text selection when drag ends
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp, { once: true });
    });
  }, []);

  return (
    <div className="container">
      <div className="scroll-content">
        <div className="image-container-geoAndDecComp1 times-new-roman gap-derive3">
          <div className="image-deriveComp3">
            <img src={Poleroid1} alt="poleroid | derive" />
            <p className="image-description">Polaroid, 10.752 x 8.847 cm </p>
          </div>
          <div className="image-deriveComp3">
            <img src={Poleroid2} alt="poleroid | derive" />
            <p className="image-description">Polaroid, 10.752 x 8.847 cm </p>
          </div>
          <div className="image-deriveComp3">
            <img src={Poleroid3} alt="poleroid | derive" />
            <p className="image-description">Polaroid, 10.752 x 8.847 cm </p>
          </div>
        </div>
      </div>
      <div className="custom-scrollbar">
        <div className="scrollbar-thumb">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default DeriveComp3;
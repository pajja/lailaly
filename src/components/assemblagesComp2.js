import React, { useEffect } from "react";
import "../styles/assemblagesComp2.css";
import asPen1 from "../assets/assemblages/IMG_3325_edited.jpg";
import asPen2 from "../assets/assemblages/IMG_3326_edited.jpg";
import "../styles/assemblagesComp.css";

const AssemblagesComp2 = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const content = document.querySelector(".scroll-content");
    const thumb = document.querySelector(".scrollbar-thumb");

    // Helper functions to disable and enable text selection
    const disableTextSelection = () => {
      document.body.style.userSelect = "none"; // Disable text selection
    };

    const enableTextSelection = () => {
      document.body.style.userSelect = ""; // Re-enable text selection
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

    const startDrag = (e, isTouch = false) => {
      e.preventDefault(); // Add this line
      disableTextSelection();

      const startX = isTouch ? e.touches[0].clientX : e.clientX;
      const startLeft = parseFloat(thumb.style.left) || 0; // Add fallback

      const onMove = (moveEvent) => {
        moveEvent.preventDefault(); // Add this line
        const clientX = isTouch
          ? moveEvent.touches[0].clientX
          : moveEvent.clientX;
        const deltaX = clientX - startX;
        const newLeft = Math.min(
          container.clientWidth - thumb.clientWidth,
          Math.max(0, startLeft + deltaX)
        );

        thumb.style.left = `${newLeft}px`;
        content.scrollLeft =
          (newLeft / container.clientWidth) * content.scrollWidth;
      };

      const onEnd = () => {
        enableTextSelection();
        document.removeEventListener(
          isTouch ? "touchmove" : "mousemove",
          onMove
        );
        document.removeEventListener(isTouch ? "touchend" : "mouseup", onEnd);
      };

      document.addEventListener(isTouch ? "touchmove" : "mousemove", onMove, {
        passive: false, // Add this option
      });
      document.addEventListener(isTouch ? "touchend" : "mouseup", onEnd);
    };

    // Create bound event handlers that we can use for both adding and removing
    const handleMouseDown = (e) => startDrag(e, false);
    const handleTouchStart = (e) => startDrag(e, true);

    thumb.addEventListener("mousedown", handleMouseDown);
    thumb.addEventListener("touchstart", handleTouchStart);

    return () => {
      content.removeEventListener("scroll", updateThumbPosition);
      thumb.removeEventListener("mousedown", handleMouseDown);
      thumb.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <div className="container">
      <div className="scroll-content">
        <div className="image-container-assemblagesComp2 times-new-roman">
          <div className="image-assemblagesComp2">
            <img
              src={asPen1}
              alt="Assemblages series - Pen and wax on paper 1"
            />
            <p className="image-description">
              Pen and wax on paper, 148 x 210mm
            </p>
          </div>
          <div className="image-assemblagesComp2">
            <img
              src={asPen2}
              alt="Assemblages series - Pen and wax on paper 2"
            />
            <p className="image-description">
              Pen and wax on paper, 148 x 210mm
            </p>
          </div>
        </div>
      </div>
      <div className="custom-scrollbar a2">
        <div className="scrollbar-thumb a2">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default AssemblagesComp2;

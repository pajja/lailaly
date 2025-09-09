import React, { useEffect } from "react";
import "../styles/geoAndDecComp1.css";
import "../styles/womanhoodComp.css";
import Painting1 from "../assets/womanhood/life1.png";
import Painting2 from "../assets/womanhood/life2.png";
import Painting3 from "../assets/womanhood/life3.png";
import Painting4 from "../assets/womanhood/IMG_5357_edited.jpg";

const WomanhoodComp6 = () => {
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
        passive: false,
      });
      document.addEventListener(isTouch ? "touchend" : "mouseup", onEnd);
    };

    // Create bound event handlers
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
        <div className="image-container-geoAndDecComp1 times-new-roman">
          <div className="image-womanhoodComp3 womanhood-6">
            <img src={Painting1} alt="Womanhood series - Life drawing 1" />
            <p className="image-description">Life drawing</p>
          </div>
          <div className="image-womanhoodComp3 womanhood-6 twow6">
            <img src={Painting2} alt="Womanhood series - Life drawing 2" />
            <p className="image-description">Life drawing</p>
          </div>
          <div className="image-womanhoodComp3 womanhood-6 threew6">
            <img src={Painting3} alt="Womanhood series - Life drawing 3" />
            <p className="image-description">Life drawing</p>
          </div>
          <div className="image-womanhoodComp3 womanhood-6">
            <img src={Painting4} alt="Womanhood series - Life drawing 4" />
            <p className="image-description">Life drawing</p>
          </div>
        </div>
      </div>
      <div className="custom-scrollbar w6">
        <div className="scrollbar-thumb w6">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default WomanhoodComp6;

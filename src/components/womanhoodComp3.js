import React, { useEffect } from "react";
import "../styles/geoAndDecComp1.css";
import "../styles/womanhoodComp.css";
import Painting1 from "../assets/womanhood/IMG_5358_edited.jpg";
import Painting2 from "../assets/womanhood/IMG_5362_edited.jpg";
import Painting3 from "../assets/womanhood/IMG_5361_edited.jpg";
import Painting4 from "../assets/womanhood/IMG_5364_edited.jpg";
import Painting5 from "../assets/womanhood/no-line.png";
import Painting6 from "../assets/womanhood/IMG_5730_edited.jpg";
import Painting7 from "../assets/womanhood/IMG_5733_edited.jpg";
import Painting8 from "../assets/womanhood/IMG_5732_edited.jpg";
import Painting9 from "../assets/womanhood/IMG_5731_edited.jpg";
import Painting10 from "../assets/womanhood/IMG_5738_edited.jpg";
import Painting11 from "../assets/womanhood/IMG_5737_edited.jpg";

const WomanhoodComp3 = () => {
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
        <div className="image-container-geoAndDecComp1 times-new-roman gap0">
          <div className="image-womanhoodComp3 firstw3">
            <img src={Painting1} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting2} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting3} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting4} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting5} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting6} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting7} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting8} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting9} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting10} alt="shapes | futures" />
          </div>
          <div className="image-womanhoodComp3 lastw3">
            <img src={Painting11} alt="shapes | futures" />
          </div>
        </div>
      </div>
      <div className="custom-scrollbar w3">
        <div className="scrollbar-thumb">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default WomanhoodComp3;

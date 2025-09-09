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

      // Get the scrollbar elementAdd commentMore actions
      const scrollbar = document.querySelector(".custom-scrollbar");

      // Set track width to 80% of container width (making it shorter)
      const trackWidthPercentage = 80; // Adjust this value as needed (80% = 20% shorter)
      const trackWidth = containerWidth * (trackWidthPercentage / 100);
      scrollbar.style.width = `${trackWidth}px`;

      // Calculate thumb size based on the new track width
      const thumbWidth = Math.max(
        (containerWidth / contentWidth) * trackWidth,
        50
      );

      // Calculate thumb position
      const thumbLeft = (scrollLeft / contentWidth) * trackWidth;

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
        moveEvent.preventDefault();
        const clientX = isTouch
          ? moveEvent.touches[0].clientX
          : moveEvent.clientX;
        const deltaX = clientX - startX;

        // Get scrollbar width for calculationsAdd commentMore actions
        const scrollbar = document.querySelector(".custom-scrollbar");
        const trackWidth =
          parseFloat(scrollbar.style.width) || container.clientWidth;

        const newLeft = Math.min(
          trackWidth - thumb.clientWidth,
          Math.max(0, startLeft + deltaX)
        );

        thumb.style.left = `${newLeft}px`;
        content.scrollLeft = (newLeft / trackWidth) * content.scrollWidth;
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
        <div className="image-container-geoAndDecComp1 times-new-roman gapw3">
          <div className="image-womanhoodComp3 firstw3">
            <img src={Painting1} alt="Womanhood series - painting 1" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting2} alt="Womanhood series - painting 2" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting3} alt="Womanhood series - painting 3" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting4} alt="Womanhood series - painting 4" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting5} alt="Womanhood series - painting 5" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting6} alt="Womanhood series - painting 6" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting7} alt="Womanhood series - painting 7" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting8} alt="Womanhood series - painting 8" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting9} alt="Womanhood series - painting 9" />
          </div>
          <div className="image-womanhoodComp3">
            <img src={Painting10} alt="Womanhood series - painting 10" />
          </div>
          <div className="image-womanhoodComp3 lastw3">
            <img src={Painting11} alt="Womanhood series - painting 11" />
          </div>
        </div>
      </div>
      <div className="custom-scrollbar w3">
        <div className="scrollbar-thumb w3">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default WomanhoodComp3;

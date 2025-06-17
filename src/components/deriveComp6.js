import React, { useEffect } from "react";
import "../styles/geoAndDecComp3.css";
import "../styles/deriveComp2.css";
import "../styles/geoAndDecComp1.css";
import "../styles/deriveComp5.css";
import leafCollage from "../assets/derive/leavescollage-different.png";
import leaf1 from "../assets/derive/IMG_3776.HEIC.jpg";
import leaf2 from "../assets/derive/IMG_3775_edited.jpg";

const DeriveComp6 = () => {
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

      // Set track width to 90% of container width (making it shorter)
      const trackWidthPercentage = 90; // Adjust this value as needed (90% = 10% shorter)
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
        <div className="image-container-geoAndDecComp1 times-new-roman gap-derive3">
          <div className="text-container-deriveComp6 times-new-roman">
            <p className="main-text">
              Finally, I combined all my ideas. From the memories I wrote down
              on my walk, I divided the areas into 4 sections on how the words
              were laid out, this is why I used four leaves out of those I
              picked up from my walk. The red thread connects them together in a
              flowing structure with many lines and links between them.
            </p>
          </div>
          <div className="image-deriveComp6">
            <img src={leaf1} alt="" />
          </div>
          <div className="image-deriveComp6">
            <img src={leaf2} alt="" />
          </div>
          <div className="image-deriveComp6">
            <img src={leafCollage} alt="" />
          </div>
        </div>
      </div>
      <div className="custom-scrollbar d6">
        <div className="scrollbar-thumb d6">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default DeriveComp6;

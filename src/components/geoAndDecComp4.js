import React, { useEffect } from "react";
import "../styles/geoAndDecComp3.css";
import blueYellow1 from "../assets/geometry-and-dec/chessboard.jpg";
import blueYellow2 from "../assets/geometry-and-dec/wood.jpg";
import shapes1 from "../assets/geometry-and-dec/two-books.png";

const GeoAndDecComp4 = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const container = document.querySelector(".container");
      const content = document.querySelector(".scroll-content-geo-dec-3");
      const thumb = document.querySelector(".scrollbar-thumb");

      if (container && content && thumb) {
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
            document.removeEventListener(
              isTouch ? "touchend" : "mouseup",
              onEnd
            );
          };

          document.addEventListener(
            isTouch ? "touchmove" : "mousemove",
            onMove,
            {
              passive: false,
            }
          );
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
      }
    }, 50); // Small delay (50ms)

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
  }, []);

  return (
    <div className="container">
      <div className="scroll-content-geo-dec-3">
        <div className="image-container-geoDecComp3">
          <div className="image-geoDecComp4 times-new-roman">
            <img
              src={blueYellow1}
              alt="Geometry and Decolonisation series - Photograph of game pieces on chess board"
            />
            <p className="image-description">
              Photograph of game pieces on chess board
            </p>
          </div>
          <div className="image-geoDecComp4 middle-g4 times-new-roman">
            <img
              src={blueYellow2}
              alt="Geometry and Decolonisation series - shelves, flowers, thread"
            />
          </div>
          <div className="image-geoDecComp4 times-new-roman">
            <img
              src={shapes1}
              alt="Geometry and Decolonisation series - Acrylic, watercolour and pen on paper"
            />
            <p className="image-description">
              Acrylic, watercolour and pen on paper, 297 x 420 mm
            </p>
          </div>
        </div>
        <div className="custom-scrollbar g4">
          <div className="scrollbar-thumb g4">
            <span className="scrollbar-text">scroll me</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoAndDecComp4;

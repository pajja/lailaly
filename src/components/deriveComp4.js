import React, { useEffect } from "react";
import "../styles/geoAndDecComp1.css";
import Painting1 from "../assets/derive/IMG_3762_edited.jpg";
import Painting2 from "../assets/derive/IMG_3764_edited.jpg";
import Painting3 from "../assets/derive/IMG_3760_edited.jpg";
import Painting4 from "../assets/derive/IMG_3765_edited.jpg";
import Painting5 from "../assets/derive/IMG_3761_edited.jpg";
import Painting6 from "../assets/derive/IMG_3763_edited.jpg";

const DeriveComp4 = () => {
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

      // Get the scrollbar element
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

      // Calculate thumb position relative to the shorter track
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

        // Get scrollbar width for calculations
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
        <div className="image-container-geoAndDecComp1 times-new-roman gap-derive4">
          <div className="image-deriveComp4">
            <img src={Painting1} alt="Dérive series - Oil pastel on paper 1" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
          <div className="image-deriveComp4">
            <img src={Painting2} alt="Dérive series - Oil pastel on paper 2" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
          <div className="image-deriveComp4">
            <img src={Painting3} alt="Dérive series - Oil pastel on paper 3" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
          <div className="image-deriveComp4">
            <img src={Painting4} alt="Dérive series - Oil pastel on paper 4" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
          <div className="image-deriveComp4">
            <img src={Painting5} alt="Dérive series - Oil pastel on paper 5" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
          <div className="image-deriveComp4">
            <img src={Painting6} alt="Dérive series - Oil pastel on paper 6" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="custom-scrollbar d4">
        <div className="scrollbar-thumb d4">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default DeriveComp4;

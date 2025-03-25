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
    }
  }, []);

  return (
    <div className="container">
      <div className="scroll-content">
        <div className="image-container-geoAndDecComp1 times-new-roman gap-derive4">
          <div className="image-deriveComp4">
            <img src={Painting1} alt="shapes | futures" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
          <div className="image-deriveComp4">
            <img src={Painting2} alt="shapes | futures" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
          <div className="image-deriveComp4">
            <img src={Painting3} alt="shapes | futures" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
          <div className="image-deriveComp4">
            <img src={Painting4} alt="shapes | futures" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
          <div className="image-deriveComp4">
            <img src={Painting5} alt="shapes | futures" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
          <div className="image-deriveComp4">
            <img src={Painting6} alt="shapes | futures" />
            <p className="image-description">
              Oil pastel on paper, 148 x 210 mm{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="custom-scrollbar d4">
        <div className="scrollbar-thumb">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default DeriveComp4;

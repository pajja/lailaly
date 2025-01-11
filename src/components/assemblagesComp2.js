import React, { useEffect } from "react";
import "../styles/assemblagesComp2.css";

const imagesAssemblages2 = [
  {
    src: require("../assets/assemblages/IMG_3325_edited.jpg"),
    description: "Pen and wax on paper, 148 x 210mm",
  },
  {
    src: require("../assets/assemblages/IMG_3326_edited.jpg"),
    description: "Pen and wax on paper, 148 x 210mm",
  },
];

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
      disableTextSelection();

      const startX = isTouch ? e.touches[0].clientX : e.clientX;
      const startLeft = parseFloat(thumb.style.left);

      const onMove = (moveEvent) => {
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

      document.addEventListener(isTouch ? "touchmove" : "mousemove", onMove);
      document.addEventListener(isTouch ? "touchend" : "mouseup", onEnd);
    };

    thumb.addEventListener("mousedown", (e) => startDrag(e, false));
    thumb.addEventListener("touchstart", (e) => startDrag(e, true));

    return () => {
      content.removeEventListener("scroll", updateThumbPosition);
      thumb.removeEventListener("mousedown", (e) => startDrag(e, false));
      thumb.removeEventListener("touchstart", (e) => startDrag(e, true));
    };
  }, []);

  return (
    <div className="container">
      <div className="scroll-content">
        <div className="image-container-assemblagesComp2 times-new-roman">
          {imagesAssemblages2.map((image, index) => (
            <div key={index} className="image-assemblagesComp2">
              <img src={image.src} alt={`Image ${index + 1}`} />
              <p className="image-description">{image.description}</p>
            </div>
          ))}
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

export default AssemblagesComp2;

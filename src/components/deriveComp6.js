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
            <img src={leaf1} alt="poleroid | derive" />
          </div>
          <div className="image-deriveComp6">
            <img src={leaf2} alt="poleroid | derive" />
          </div>
          <div className="image-deriveComp6">
            <img src={leafCollage} alt="poleroid | derive" />
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

export default DeriveComp6;
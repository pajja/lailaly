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
      <div className="custom-scrollbar">
        <div className="scrollbar-thumb">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default DeriveComp4;

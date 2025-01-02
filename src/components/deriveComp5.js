import React, { useEffect } from "react";
import "../styles/geoAndDecComp3.css";
import "../styles/deriveComp2.css";
import "../styles/geoAndDecComp1.css";
import "../styles/deriveComp5.css";
import leafCollage from "../assets/derive/frameleaves-2.png";
import ballpoint1 from "../assets/derive/IMG_3757_edited.jpg";
import ballpoint2 from "../assets/derive/IMG_3758_edited_edited.jpg";

const DeriveComp5 = () => {
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
          <div className="text-container-deriveComp2 times-new-roman">
            <p className="main-text">
              Brendan Stuart Burns uses his mediums to create natural looking
              textures in the organic patterns in his work. Stuart Burns' work
              varies in size but seems to concentrate, or I interpret it as, the
              natural world. His paintings remind me of moss, honey comb, fallen
              leaves or pond scenes, much like Monet's Water Lilies. Whatever is
              being painted however, looks very organic and almost like its
              growing like bacteria on the board. His work is not chaotic but is
              not ordered at all, much like falling leaves which are random in
              their arrangement but have not got a energised craziness about it.
              I decided to use thick oil pastels to depict the sections from the
              photographs I took to add dimension and work further on texture by
              adding a texture to an image of texture. I did want to however,
              add some chaos into the work and make it less serene than that of
              Stuart Burns'. I liked making a series of work, much like the
              series of photographs and the imagery tied between the contrasting
              surfaces. I also wanted to work with the leaves I had collected. I
              used oil pastels on this too but felt it didn't portray the
              intricacy of what I was drawing so I decided to use a ball point
              like the one I had used to write the memories.
            </p>
          </div>
          <div className="image-deriveComp3">
            <img src={leafCollage} alt="poleroid | derive" />
          </div>
          <div className="image-deriveComp5">
            <img src={ballpoint1} alt="poleroid | derive" />
            <p className="image-description">Ballpoint pen on paper A4</p>
          </div>
          <div className="image-deriveComp5">
            <img src={ballpoint2} alt="poleroid | derive" />
            <p className="image-description">Ballpoint pen on paper A4</p>
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

export default DeriveComp5;

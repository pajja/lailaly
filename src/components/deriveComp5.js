import React, { useEffect } from "react";
import "../styles/geoAndDecComp3.css";
import "../styles/deriveComp2.css";
import "../styles/geoAndDecComp1.css";
import "../styles/deriveComp5.css";
import leafCollage from "../assets/derive/frameleaves-2.png";
import ballpoint1 from "../assets/derive/IMG_3757_edited.jpg";
import ballpoint2 from "../assets/derive/weird-heart-2.png";

const DeriveComp5 = () => {
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
          <div className="text-container-deriveComp5 times-new-roman">
            <div className="columns-two">
              <p className="main-text">
                Brendan Stuart Burns uses his mediums to create natural looking
                textures in the organic patterns in his work. Stuart Burns' work
                varies in size but seems to concentrate, or I interpret it as,
                the natural world. His paintings remind me of moss, honey comb,
                fallen leaves or pond scenes, much like Monet's Water Lilies.
                Whatever is being painted however, looks very organic and almost
                like its growing like bacteria on the board. His work is not
                chaotic but is not ordered at all, much like falling leaves
                which are random in their arrangement but have not got a
                energised craziness about it. I decided to use thick oil pastels
                to depict the sections from the photographs I took to add
                dimension and work further on texture by adding a texture to an
                image of texture. I did want to however, add some chaos into the
                work and make it less serene than that of Stuart Burns'. I liked
                making a series of work, much like the series of photographs and
                the imagery tied between the contrasting surfaces. I also wanted
                to work with the leaves I had collected. I used oil pastels on
                this too but felt it didn't portray the intricacy of what I was
                drawing so I decided to use a ball point like the one I had used
                to write the memories.
              </p>
            </div>
          </div>
          <div className="image-deriveComp5">
            <img src={leafCollage} alt="" />
          </div>
          <div className="image-deriveComp5">
            <img src={ballpoint1} alt="" />
            <p className="image-description">Ballpoint pen on paper A4</p>
          </div>
          <div className="image-deriveComp5">
            <img src={ballpoint2} alt="" />
            <p className="image-description">Ballpoint pen on paper A4</p>
          </div>
        </div>
      </div>
      <div className="custom-scrollbar d5">
        <div className="scrollbar-thumb d5">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default DeriveComp5;

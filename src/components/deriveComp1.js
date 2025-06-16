import React, { useEffect } from "react";
import "../styles/geoAndDecComp3.css";
import paper1 from "../assets/derive/IMG_3759_edited.jpg";
import leaf1 from "../assets/derive/stoopid-leafs.png";

const DeriveComp1 = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const container = document.querySelector(".container");
      const content = document.querySelector(".scroll-content-geo-dec-3");
      const thumb = document.querySelector(".scrollbar-thumb");

      // Check if elements exist before proceeding
      if (!container || !content || !thumb) {
        console.error("Required DOM elements not found");
        return;
      }

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
        if (!scrollbar) return;

        // Set track width to 80% of container width (making it shorter)
        const trackWidthPercentage = 80; // Adjust this value as needed (80% = 20% shorter)
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
    }, 50); // Small delay (50ms)

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
  }, []);

  return (
    <div className="container">
      <div className="scroll-content-geo-dec-3">
        <div className="image-container-assemblagesComp">
          <div className="image-deriveComp1">
            <img src={paper1} alt="" />
          </div>
          <div className="text-container-deriveComp1">
            <div className="columns-three">
              <p className="main-text times-new-roman">
                I started this walk not on my own like we were instructed to but
                with others that were going the same direction. We started
                talking and I mentioned some memories that happened at the
                beginning of our path. I found myself mentioning a lot of
                memories that happened along or near this small stretch of
                insignificant road. I started to realise that from living in
                Oxford for so long, every centimetre of this city has some sort
                of memory attached to it. I started to write these memories,
                however, insignificant, starting from the top of the page and
                working down as I carried on walking. This started to form a
                sort of map of memories because if you look at the page, the
                memories are placed in the area they were formed in if a map
                were to be layered under the words. I was interested by the
                artist Paul Ryan whilst doing this note taking. Ryan focus his
                work on the making of a sketchbook by using words and first hand
                written ideas on his page. His work has a lot of rough writing
                and lines linking ideas, showing his though process expressively
                with gesture, sort of like a mind map where the actual writing
                and lettering also conveys ideas not just the words, creating a
                universal language; which is the basis of art, to be able to
                communicate without words. Upon looking further at using words
                in art, I found that Tracey Hill also takes notes and writes
                down ideas as well as collecting and taking specimens of
                interest home, this is shown in her 2015 sketchbook records
                where she takes some leaves or moss from a field of interest to
                her. It was late autumn where I was walking so I decided to
                takes leaves that have dropped to the ground. When I got home I
                pressed these leaves so that they wouldn't decay and I could
                work on them whenever I needed some background to work on- it
                was almost like this process was me making my own paper. I
                decided to apply my initial interest of the memories with this
                physical object from the ground that the memories were formed on
                by writing on the leaves and using them as my paper. I tied them
                together with string and stitches.
              </p>
            </div>
          </div>
          <div className="image-deriveComp1 leafs">
            <img src={leaf1} alt="" />
          </div>
        </div>
      </div>
      <div className="custom-scrollbar d1">
        <div className="scrollbar-thumb d1">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default DeriveComp1;

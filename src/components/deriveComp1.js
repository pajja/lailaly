import React, { useEffect } from "react";
import "../styles/geoAndDecComp3.css";
import paper1 from "../assets/derive/IMG_3759_edited.jpg";
import leaf1 from "../assets/derive/IMG_3751_edited_edited.jpg";

const DeriveComp1 = () => {
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
      }
    }, 50); // Small delay (50ms)

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
  }, []);

  return (
    <div className="container">
      <div className="scroll-content-geo-dec-3">
        <div className="image-deriveComp1" style={{ marginLeft: "90px" }}>
          <img src={paper1} alt="Paper" />
        </div>
        <div className="text-container-geoDecComp3 times-new-roman">
          <p className="main-text">
            I started this walk not on my own like we were instructed to but
            with others that were going the same direction. We started talking
            and I mentioned some memories that happened at the beginning of our
            path. I found myself mentioning a lot of memories that happened
            along or near this small stretch of insignificant road. I started to
            realise that from living in Oxford for so long, every centimetre of
            this city has some sort of memory attached to it. I started to write
            these memories, however, insignificant, starting from the top of the
            page and working down as I carried on walking. This started to form
            a sort of map of memories because if you look at the page, the
            memories are placed in the area they were formed in if a map were to
            be layered under the words. I was interested by the artist Paul Ryan
            whilst doing this note taking. Ryan focus his work on the making of
            a sketchbook by using words and first hand written ideas on his
            page. His work has a lot of rough writing and lines linking ideas,
            showing his though process expressively with gesture, sort of like a
            mind map where the actual writing and lettering also conveys ideas
            not just the words, creating a universal language; which is the
            basis of art, to be able to communicate without words. Upon looking
            further at using words in art, I found that Tracey Hill also takes
            notes and writes down ideas as well as collecting and taking
            specimens of interest home, this is shown in her 2015 sketchbook
            records where she takes some leaves or moss from a field of interest
            to her. It was late autumn where I was walking so I decided to takes
            leaves that have dropped to the ground. When I got home I pressed
            these leaves so that they wouldn't decay and I could work on them
            whenever I needed some background to work on- it was almost like
            this process was me making my own paper. I decided to apply my
            initial interest of the memories with this physical object from the
            ground that the memories were formed on by writing on the leaves and
            using them as my paper. I tied them together with string and
            stitches.
          </p>
        </div>
        <div className="image-deriveComp1">
          <img src={leaf1} alt="Leafs" />
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

export default DeriveComp1;

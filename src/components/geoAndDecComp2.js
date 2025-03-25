import React, { useEffect } from "react";
import "../styles/geoAndDecComp2.css";
import hilmaCollage from "../assets/geometry-and-dec/putogether-dec.png";
import tree from "../assets/geometry-and-dec/IMG_2456_edited.jpg";
import lovers from "../assets/geometry-and-dec/IMG_2455_edited.jpg";

const GeoAndDecComp2 = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
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
      <div className="scroll-content">
        <div className="image-container-assemblagesComp">
          <div className="image-geoAndDecComp2 pad-1 times-new-roman">
            <img
              src={hilmaCollage}
              alt="Hilma af Klint Coll"
              className="collage"
            />
            <div className="image-desc-container">
              <p className="image-description fontg2">
                Hilma af Klint’s series of paintings <br /> from 1913/15: Tree
                of Knowledge
              </p>
              <p className="image-description fontg2">
                Hilma af Klint, Grupp IX/UW, Duvan,
                <br />
                nr 9 (Group IX/UW, The Dove, no. 9), 1915
              </p>
              <p className="image-description fontg2">
                Hilma Af Klint, Evolution No.13, <br /> 1908
              </p>
            </div>
          </div>
          <div className="text-container-geoAndDecComp2 times-new-roman">
            <div className="columns-four">
              <p className="main-text">
                Hilma Af Klint, born in 1862 Stockholm, used geometric patterns
                and symmetry greatly in her abstract work. Her early work
                consisted of landscapes, self portraits and botanist studies
                until she become captivated by the spiritual world. She began to
                conduct seances with a group of women who named themselves, The
                Five. They would encounter spirits and guides during these
                seances who would send them messages. Klint expressed that she
                received a secret commission from one of the guides. 196
                paintings were produced which represented the Spirit of the
                World. The Guggenheim describes her work baring a 'mystical,
                idiosyncratic geometry' to depict this living being of the
                world. In her work there are many representations and themes
                than run through the paintings, like a code. For one example,
                the colours. Blue represents female, yellow is male and the
                colour green is the unity of both these genders. After
                discovering the works of Hilma Af Klint and her use of geometry,
                symbolism, I attempted to try and create pieces using these
                ideas. For example, the piece on the left, I directly tried to
                imitate what I see the universe as in the form of shapes and
                took inspiration from Klint's colour theory. I feel however, my
                attempt was not successful as it was superficial. I have no
                connection to spirits and my representation is superficial and
                based on aesthetics and my ignorant ways of thinking. On the
                other hand, I tried to draw on what I did know and do some
                research into Chinese medicine. My family have been going to
                accupuncturists my whole life and I have always been surrounded
                by these drawings representing the practise. Such as the five
                elements, earth, water, fire, wood and metal, and their control
                over different parts of our body. On the first piece, I added
                these elements connecting to a tree's roots. Klint made many
                'Tree of Knowledge' paintings, however, I decided to use the
                tree symbol to not only represent knowledge but the body also. I
                did not include the canopy of the tree though, and instead cut
                it off with dark colours to represent the unknown. This is
                because I felt that if the tree was to represent the body and
                the knowledge instilled in this body, then there is some
                restricted to the knowledge and there is so much each body from
                each species will not know. I feel this was a response to how I
                felt trying to make work like Klint's which has so much
                underlying spiritual meaning. Acrylic was also not working for
                me with how fast the paint dried. I felt like this meant I had
                to work more quickly and plan before; this wasn't effective to
                allow for thinking and adjustments when I was painting. I moved
                onto oils after these two pieces and tried again to work freely
                and conceptually.{" "}
              </p>
            </div>
          </div>
          <div className="image-geoAndDecComp2">
            <img src={tree} alt="" />
            <p className="image-description times-new-roman">
              Acrylic on paper, 297 x 420 mm
            </p>
          </div>
          <div className="image-geoAndDecComp2 pad-2 times-new-roman">
            <img src={lovers} alt="" />
            <p className="image-description">
              Acrylic on paper, 148.5 x 210 mm
            </p>
          </div>
        </div>
        <div className="custom-scrollbar g2">
          <div className="scrollbar-thumb">
            <span className="scrollbar-text">scroll me</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoAndDecComp2;

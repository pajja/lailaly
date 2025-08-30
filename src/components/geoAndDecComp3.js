import React, { useEffect } from "react";
import "../styles/geoAndDecComp3.css";
import blueYellow1 from "../assets/geometry-and-dec/IMG_3183_edited.jpg";
import blueYellow2 from "../assets/geometry-and-dec/IMG_3181_edited.jpg";
import shapes1 from "../assets/geometry-and-dec/IMG_2966_edited.jpg";
import shapes2 from "../assets/geometry-and-dec/IMG_2967_edited_edited.png";
import shapes3 from "../assets/geometry-and-dec/IMG_3268_edited_edited.jpg";
import shapes4 from "../assets/geometry-and-dec/IMG_2965_edited.jpg";
import shapes5 from "../assets/geometry-and-dec/IMG_2964_edited.jpg";

const GeoAndDecComp3 = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const container = document.querySelector(".container");
      const content = document.querySelector(".scroll-content-geo-dec-3"); // Fixed class name
      const thumb = document.querySelector(".scrollbar-thumb");

      // Check if all elements exist before proceeding
      if (!container || !content || !thumb) {
        console.error("One or more required DOM elements not found:", {
          container: !!container,
          content: !!content,
          thumb: !!thumb,
        });
        return; // Exit early if elements aren't found
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

        // Set track width to 85% of container width (making it shorter)
        const trackWidthPercentage = 85; // Adjust this value as needed (85% = 15% shorter)
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
    }, 100); // Increased timeout to 100ms to ensure DOM is fully loaded

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts
    };
  }, []);

  return (
    <div className="container">
      <div className="scroll-content-geo-dec-3">
        <div className="image-container-geoDecComp3">
          <div className="image-geoDecComp3 g3first times-new-roman">
            <img
              src={blueYellow1}
              alt="First of Blue and yellow geometric shapes"
            />
            <p className="image-description">Oil on paper, 148.4 x 210 mm</p>
          </div>
          <div className="image-geoDecComp3 times-new-roman">
            <img
              src={blueYellow2}
              alt="Second of Blue and yellow geometric shapes"
            />
            <p className="image-description">Oil on paper, 148.4 x 210 mm</p>
          </div>
          <div className="text-container-geoDecComp3 times-new-roman">
            <div className="columns-four">
              <p className="main-text">
                All of our art and everything we create is about us. It is sort
                of narcissistic to only be able to view the universe and world
                in ways that effects us. Even the drawing of a siamese cat that
                I was gifted for my birthday is about us as humans; the
                domesticated cat and its siamese traits that have been bread
                into it. This makes me feel so ignorant. The fact that Hilma Af
                Klint knew her work was too radical for her day and that the
                world was not ready to hear her makes me think that without the
                ability to self critique our society, her work may have gotten
                lost or been grossly misinterpreted into pretty shapes done by a
                woman who studied at art school. I have applied this use of
                depicting something more than just humans in my diptych above.
                The organic shapes of blue and yellow represent two halves of a
                whole. Not exactly soul mates or twin flames or la media naranja
                but the notion of not being whole. The diptych is an outcome of
                the lockdowns we have been going through with the consequent
                time after it where we can rejoin each other again. However, I
                do not want it to represent this one period in time which is so
                insignificant to the universe but rather the emotions felt
                throughout years by many beings and entities that have
                experienced being less than whole. This is why I have chosen to
                not portray my subjects as humans but rather organic and rounded
                shapes. The colour of blue and yellow and the meanings that
                Halma Af Klint attached to them have also been used to represent
                these two sides of the whole, which would be represented by the
                colour green. These pieces have been done on paper with a white
                acrylic base. The base ensured that the oil did not seep into
                the paper but instead could be manipulated to provide a smooth
                surface for the rounded shapes to look especial plump and for
                the yellow and blue to mix effectively in the second panel with
                the character's reunion. ​ These pieces were made when trying to
                re do the previous ones done in acrylic of the two human bodies.
                I tried to re do it in the same way but I trailed off as soon as
                I made the yellow character as it had turned into just shapes.
                On going through the motions of making the piece, I was using
                bright colours and harsh shadows to create this dream like
                light, midday in summer but brighter. These were almost visions
                from dreams. I feel like it gives a sort of unsettling mood. ​ I
                have looked at the human race recently in two ways. One way is
                most often and brings me anger and hopelessness. I see humans as
                green and consumption, like a harmful bacteria growing at an
                unnatural rate. However, the other way seeps through the cracks
                occasionally. I see the endearing and weird nature of us as
                beings. How we drink old fruits and smoke dried leaves and how
                we hold hands for comfort and affection. How we gift our loved
                ones jewels and shiny objects to decorate them and that we're
                endlessly fascinated by lights and vast views.{" "}
              </p>
            </div>
          </div>
          <div className="image-geoDecComp3 times-new-roman">
            <img src={shapes1} alt="" />
            <p className="image-description">Oil on paper, 148.4 x 210 mm</p>
          </div>
          <div className="image-geoDecComp3 times-new-roman">
            <img src={shapes2} alt="" />
            <p className="image-description">Oil on paper, 148.4 x 210 mm</p>
          </div>
          <div className="image-geoDecComp3 times-new-roman">
            <img src={shapes3} alt="" />
            <p className="image-description">Oil on paper, 148.4 x 210 mm</p>
          </div>
          <div className="image-geoDecComp3 times-new-roman">
            <img src={shapes4} alt="" />
            <p className="image-description">
              Oil and acrylic on paper, 148.4 x 210 mm
            </p>
          </div>
          <div className="image-geoDecComp3 g3last times-new-roman">
            <img src={shapes5} alt="" />
            <p className="image-description">Oil on paper, 420 x 594 mm</p>
            <p className="image-description-more black">
              This oil piece is a more direct response to the pandemic.{" "}
            </p>
          </div>
        </div>
        <div className="custom-scrollbar g3">
          <div className="scrollbar-thumb g3">
            <span className="scrollbar-text">scroll me</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeoAndDecComp3;

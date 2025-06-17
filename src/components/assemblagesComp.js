import React, { useEffect } from "react";
import "../styles/assemblagesComp.css";
import collage from "../assets/assemblages/IMG_3314_edited.jpg";
import putTogether from "../assets/assemblages/put-together.png";

const AssemblagesComp = () => {
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

      // Set track width to 80% of container width (making it shorter)
      const trackWidthPercentage = 80; // Adjust this value as needed (80% = 20% shorter)
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
        <div className="image-container-assemblagesComp times-new-roman">
          <div className="image-assemblagesComp marginleft100">
            <img src={collage} alt="" className="collage" />
            <p className="image-description">
              Ink and collage on paper, 594 x 841mm
            </p>
          </div>
          <div className="text-container-assemblagesComp">
            <div className="columns-five">
              <p className="main-text">
                In starting to collage I had decided that I would like to make
                something that can be expanded on through other mediums. Akiko
                Tangiguchi’s work, Release of Sorrow, Release of Wisdom and
                Essence of Water III, greatly interested me through the shapes
                and organic forms in each piece. I suspected that possibly they
                used collage to put these shapes together before using dry point
                etching or chine cole to make the pieces. I would have liked to
                try to do this and create some etchings with the techniques they
                used but I did not have access to a printing press so I decided
                to look at other artists who use collage as a stimulus. I also
                took inspiration from artists such as Neo Rauch and Max Ernst
                who created scenes, first using collage and then other mediums,
                such as oil or etching. Max Ernst used collaging to create the
                novel Une Semaine de Bonte which is a whole book of
                surrealistic, dark and humorous scenes. I liked that these
                scenes looked altogether quite normal with what they could be
                depicting, however, on further inspection it became quite
                apparent that they are not as mundane. A lot of their work
                features bird people in these scenes. Neo Rauch, on the other
                hand, uses oil paints, for example to create Heilstätten. His
                work also creates this similar sense of oddness however, being
                less dark and more just out of proportions or not making sense
                with scale or placement or shadow. I then aimed in my collaging
                to create something that I could use to create a scene like
                this. I used the cover of a book, some images from magazines
                which showed whole rooms and people from a Chinese beauty
                magazine. As well as this I also decided to use sections of
                other artists’ work, either as a whole figure or part of it as a
                shape. Robert Rauchenberg also worked with other pre-existing
                art, particularly the Mona Lisa. However, I still wanted to do
                some sort of printing like the chine cole that Tangiguchi used
                but without a printing press I could only use print without a
                press. I made a collagraph with hot glue from a glue gun to make
                swirling lines and ran over it with black ink. The lines it made
                were not as defined as I would have liked though so I decided to
                use a technique learn it the Chance and Sequence unit. I dropped
                string onto the table and laid the paper on the string. I then
                used a roller so that where the string was, there was a darker
                colour. I used this paper for the background in which I put the
                collage in the middle of. After assembling the collage, I used
                oils to interpret it as two rooms separated by a hallway with a
                painting hanging in the hallway. The collage became a loose
                stimulus, more using it for forms and colour. However, I would
                like to separate this into two or three different pieces and use
                more detail and possibly a different media, such as possibly
                etching and print if I can access this, to make smaller pieces.
              </p>
            </div>
          </div>
          <div className="image-assemblagesComp last-a1">
            <img src={putTogether} alt="" className="collage" />
            <p className="image-description">
              Neo Rauche, Max Ernst, Akiko Tangiguchi
            </p>
          </div>
        </div>
      </div>
      <div className="custom-scrollbar a1">
        <div className="scrollbar-thumb a1">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default AssemblagesComp;

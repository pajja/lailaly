import React, { useEffect } from "react";
import "../styles/assemblagesComp.css";
import collage from "../assets/assemblages/IMG_3314_edited.jpg";
import putTogether from "../assets/assemblages/put-together.png";

const AssemblagesComp = () => {
  useEffect(() => {
    const container = document.querySelector(".container-a");
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
    <div className="container-a">
      <div className="scroll-content">
        <div className="image-container-assemblagesComp">
          <img src={collage} alt="collage" className="collage" />
          <p className="collage-description">
            Ink and collage on paper, 594 x 841mm
          </p>
        </div>
        <div className="text-container-assemblagesComp">
          <p className="main-text">
            In starting to collage I had decided that I would like to make
            something that can be expanded on through other mediums. Akiko
            Tangiguchi’s work, Release of Sorrow, Release of Wisdom and Essence
            of Water III, greatly interested me through the shapes and organic
            forms in each piece. I suspected that possibly they used collage to
            put these shapes together before using dry point etching or chine
            cole to make the pieces. I would have liked to try to do this and
            create some etchings with the techniques they used but I did not
            have access to a printing press so I decided to look at other
            artists who use collage as a stimulus. I also took inspiration from
            artists such as Neo Rauch and Max Ernst who created scenes, first
            using collage and then other mediums, such as oil or etching. Max
            Ernst used collaging to create the novel Une Semaine de Bonte which
            is a whole book of surrealistic, dark and humorous scenes. I liked
            that these scenes looked altogether quite normal with what they
            could be depicting, however, on further inspection it became quite
            apparent that they are not as mundane. A lot of their work features
            bird people in these scenes. Neo Rauch, on the other hand, uses oil
            paints, for example to create Heilstätten. His work also creates
            this similar sense of oddness however, being less dark and more just
            out of proportions or not making sense with scale or placement or
            shadow. I then aimed in my collaging to create something that I
            could use to create a scene like this. I used the cover of a book,
            some images from magazines which showed whole rooms and people from
            a Chinese beauty magazine. As well as this I also decided to use
            sections of other artists’ work, either as a whole figure or part of
            it as a shape. Robert Rauchenberg also worked with other
            pre-existing art, particularly the Mona Lisa. However, I still
            wanted to do some sort of printing like the chine cole that
            Tangiguchi used but without a printing press I could only use print
            without a press. I made a collagraph with hot glue from a glue gun
            to make swirling lines and ran over it with black ink. The lines it
            made were not as defined as I would have liked though so I decided
            to use a technique learn it the Chance and Sequence unit. I dropped
            string onto the table and laid the paper on the string. I then used
            a roller so that where the string was, there was a darker colour. I
            used this paper for the background in which I put the collage in the
            middle of. After assembling the collage, I used oils to interpret it
            as two rooms separated by a hallway with a painting hanging in the
            hallway. The collage became a loose stimulus, more using it for
            forms and colour. However, I would like to separate this into two or
            three different pieces and use more detail and possibly a different
            media, such as possibly etching and print if I can access this, to
            make smaller pieces.
          </p>
        </div>
        <div className="image-container-assemblagesComp">
          <img src={putTogether} alt="images" className="collage" />
          <p className="collage-description-2">
            Neo Rauche, Max Ernst, Akiko Tangiguchi
          </p>
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

export default AssemblagesComp;

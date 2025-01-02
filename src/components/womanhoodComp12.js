import React, { useEffect } from "react";
import "../styles/assemblagesComp.css";

const WomanhoodComp12 = () => {
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
      <div className="scroll-content gap">
        <div className="text-container-assemblagesComp">
          <p className="main-text times-new-roman">
            After my Pecha Kucha I managed to get into the print room to do
            printing with etched tetra packs. I needed the press to do this so
            being in contact with the technician and having meetings to book a
            time and get the right paper was vital. I used red inks and black as
            well as experimenting with different papers so I knew what to use
            when moving forward. I tried 200mm thick paper, Japanese Hosho paper
            and shiny print paper. I decided on using thick paper for my prints
            and to put them in the press as it took up most of the ink and all
            the textures and intricate details the best. I carried on with my
            themes and symbols from the monotype prints and tried writing too
            (which came out backwards). The print with the portrait has more of
            a story to it than the other two, which focus on the shapes and
            lines discussed earlier. It has the image of the eye which has
            replaced the brain. A line comes from it down the body. With this I
            was trying to show the internalised male gaze in women that we
            cannot escape from and unconsciously constantly measure ourselves
            against. I also used the head features often pictured behind the
            virgin Mary who is basically a manifestation of the perfect woman in
            the eyes of the patriarchy, a 'pure virgin' yet still a mother. The
            ultimate 'wifey material'. It is a reaction to the male gaze and
            expectations of women through the experience of a woman. After
            getting into the print room I went back to old prints and decided I
            wanted to do more with them, specifically use writing as I have so
            many words in my head whilst I am making my works from all the
            theory I have used for my research. I wanted to write these thoughts
            down. I was inspired my the collaboration between two artists I have
            looked at recently, Louise Bourgeois and Tracey Emin, which they
            named Do Not Abandon Me. Bourgeois did a series of watered down
            gouache then sent them to Emin to work on. She used pen to doodle
            and write over these to expand on the emotions that she felt
            Bourgeois was depicting. Below I have added an image of one of these
            paintings.
          </p>
        </div>
        {/* <div className="image-womanhoodComp3 womanhood-6-2 right-padding-0">
          <img src={image} alt="shapes | futures" />
          <p className="image-description">Life drawing</p>
        </div> */}
      </div>
      <div className="custom-scrollbar">
        <div className="scrollbar-thumb">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default WomanhoodComp12;

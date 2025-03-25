import React, { useEffect } from "react";
import "../styles/geoAndDecComp3.css";
import "../styles/deriveComp2.css";
import shapes1 from "../assets/womanhood/IMG_5748_edited.jpg";
import shapes2 from "../assets/womanhood/IMG_5749_edited.jpg";

const WomanhoodComp4 = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const container = document.querySelector(".container");
      const content = document.querySelector(".scroll-content-geo-dec-3");
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
        <div className="text-container-womanhoodComp-universal text-w4-1 times-new-roman">
          <p className="main-text padding-womanhood">
            Here I have been experimenting with imagery and symbols I associate
            with Womanhood and the difficult experiences faced. I have been
            trying monotypes at home with my own resources and using knowledge
            from the previous workshops that inspired me to get the hang of
            techniques. I have been using imagery that has stood out to me from
            my research into artists; such as Louis Bourgeois and her 'part
            objects' that she uses in sculpture, Frida Khalo, Marlene Dumas and
            Georgia O'Keefe, as well as using some of my own imagery from
            primary research.
          </p>
        </div>
        <div className="text-container-womanhoodComp-universal text-w4-2 times-new-roman">
          <p className="main-text padding-womanhood">
            Some of the symbols also resonate with biological diagrams and
            anatomical drawings. I have decided to include some resonance of
            this as I feel strongly that historically biological research, that
            has predominantly been done by white men, has had a large degree of
            prejudice woven into it's supposedly objective data. This has become
            apparent to me whilst reading the Charles King book The Reinvention
            of Humanity. The book explores the many paths of the past of
            Anthropology and it discusses how biological research and findings
            often hindered the findings of Anthropological research as people
            took the words of scientists as absolute truths and did not ever
            question how exact they were. This often results in existing
            prejudices being solidified as facts to the public. Eugenics
            movements in countries such as the US has been backed up in the past
            by biology like this. The biological 'facts' that I am specifically
            referring to and has interested me regarding women's lives is the
            assumed concepts of women being 'naturally' more maternal,
            physically weaker and slower and naturally their purpose is to carry
            offspring and care for others. Not to mention the notion that rape
            is natural as animals don't have consent, larger breasts are
            attractive from an evolutionary and natural selection basis and many
            others. What I am trying to convey is that biology has been taken as
            objective when in fact, socialisation and the impact of a
            patriarchal culture has had far more of an impact than we know.{" "}
          </p>
        </div>
        <div className="text-container-womanhoodComp-universal text-w4-3 times-new-roman">
          <p className="main-text padding-womanhood">
            Some symbols I have used is the beans like shapes. These are mainly
            pointing towards an image of a foetus as well as ovaries, testicals,
            breasts or just general organs. I also have egg shapes and human
            body shapes and hair textures. The circle and the eye have also been
            used to represent the male gaze and the internalised male gaze that
            women may have. ​
          </p>
        </div>
        <div className="image-womanhoodComp4" style={{ marginRight: "100px" }}>
          <img src={shapes1} alt="Geometric shapes" />
        </div>
        <div className="image-womanhoodComp4">
          <img src={shapes2} alt="Geometric shapes" />
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

export default WomanhoodComp4;

import React, { useEffect } from "react";
import "../styles/geoAndDecComp3.css";
import "../styles/deriveComp2.css";
import shapes1 from "../assets/womanhood/ev1.png";
import shapes2 from "../assets/womanhood/ev2.png";
import shapes3 from "../assets/womanhood/ev3.png";
import shapes4 from "../assets/womanhood/pon2.jpg";
import shapes5 from "../assets/womanhood/pon1.jpg";
import "../styles/womanhoodComp.css";

const WomanhoodComp13 = () => {
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
        <div className="text-container-womanhoodComp13 times-new-roman">
          <p className="main-text padding-womanhood">
            I presented these prints in a crit session with peers and my tutor
            as I asked where they think I should go next. However, it became
            apparent that my work had been misunderstood as a celebration of
            fertility and the strength of birth as well as having tunnel vision
            to only associate women with this ability to create human life due
            to my use of biological imagery. This was a shame as these words are
            the exact thing I am commenting on. I feel the irony was not
            understood as my work is a comment against this 'tunnel vision' and
            in fact does not celebrate fertility but criticises it as being seen
            as the most important trait of a woman. My work is a mirror of the
            patriarchal culture I see and is representing it through symbols and
            words. I received advise to not reduce women down to body parts and
            perhaps I should concentrate on other things women are powerful for,
            but this is not the part of womanhood I am exploring. I am exploring
            the experiences of women that constitutes womanhood and,
            unfortunately, that means I am exploring a lot of negative parts of
            society. This feedback has thrown me off from my direction and
            forced me to go back and look at my work. I worried it was too
            surface level and actually I had not done enough to work my research
            into my prints. After reflecting on my work however, I realised that
            there must be some misunderstanding to have received this feedback
            as, especially along with the words, there is no way that my prints
            could be seen as celebratory or looking at a womanhood through a
            tunnel vision or through positive and, what I would say as, a more
            liberal feminist lens. My work may need explanations to understand
            the depth fully.
          </p>
        </div>
        <div className="text-container-womanhoodComp13 times-new-roman">
          <p className="main-text padding-womanhood">
            The print on the left pictures a silhouette, which should be
            interpreted as male. The face has been replaced with one large eye
            with a dotted line leading to the testicular glands. The words to
            the left of the figure read, 'He forces her to become the thing that
            causes him an erection.' This piece is representing the male gaze as
            well as rape culture. The middle print shows the cross section of a
            pregnant woman. The black bean shape represents a foetus and the
            yellow bean is a birthed child. The words read, 'The first thing
            woman he drains is his mother. She is devoted. He uses her up. He
            adjusts his parasitism to other females.' This piece relates to the
            allocation of primary parent to women due to their ability to carry
            children. Mothers nurture and care for their sons with every ounce
            of their being and receive oppression back in the form of
            harassment, assault, limited freedom and ridiculous amounts of
            pressure on their appearance. The print on the right pictures more
            abstract symbols. The circular shape could be interpreted as the
            womb, stomach, genitalia etc. The bean shapes could represent organs
            or foetuses. This is where the research before on experimenting with
            shapes has helped me the most to almost create an image that
            embodies womanhood. The words read 'Our whole lives, before and
            after, will always be corrupted by the biological ability to create
            human life.'
          </p>
        </div>
        <div className="image-womanhoodComp13 less-pad-w13 times-new-roman">
          <img src={shapes1} alt="" />
          <p className="image-description times-new-roman black">
            'He forces her to become the thing that causes him an erection.'
          </p>
        </div>
        <div className="image-womanhoodComp13 less-pad-w13 times-new-roman">
          <img src={shapes2} alt="" />
          <p className="image-description times-new-roman black">
            {" "}
            'The first thing woman he drains is his mother. She is devoted.{" "}
            <br /> He uses her up. He adjusts his parasitism to other females.'
          </p>
        </div>
        <div className="image-womanhoodComp13 less-pad-w13 times-new-roman">
          <img src={shapes3} alt="" />
          <p className="image-description times-new-roman black">
            'Our whole lives, before and after, will always be corrupted by the
            biological ability to create human life.'
          </p>
        </div>
        <div className="text-container-womanhoodComp13 times-new-roman">
          <p className="main-text padding-womanhood">
            I could have stopped here and ended with a triptych of work that I
            think encompasses womanhood, however, I did get a piece of feedback
            from the session I talked about earlier that led me into moving away
            from just the root cause of the turmoils of womanhood and instead
            look into how these root causes have effected everyday life in a
            more obvious sense. I was told that I could be more provocative with
            my work and more shocking if I wanted to get it to be impactful. I
            therefore, thought 'Who could be more provocative than Marlene
            Dumas?' with her use of pornography as references.
          </p>
        </div>
        <div className="image-womanhoodComp13 times-new-roman">
          <img src={shapes4} alt="" />
          <p className="image-description times-new-roman">
            Marlene Dumas' work
          </p>
        </div>
        <div className="image-womanhoodComp13 times-new-roman">
          <img src={shapes5} alt="" />
          <p className="image-description times-new-roman">
            Marlene Dumas' work
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

export default WomanhoodComp13;

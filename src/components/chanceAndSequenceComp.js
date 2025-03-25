import React, { useEffect } from "react";
import ChanceAndSequenceImages from "./imagesChanceAndSequence";
import "../styles/chanceAndSequenceComp.css";
import image1 from "../assets/chance-and-seq/image1-cropped.png";
import image2 from "../assets/chance-and-seq/IMG_2947_edited-3.png";

const ChanceAndSequenceComp = () => {
  useEffect(() => {
    const container = document.querySelector(".container-vertical");
    const content = document.querySelector(".scroll-content-vertical");
    const thumb = document.querySelector(".scrollbar-thumb-vertical");

    console.log("container: ", container);
    console.log("content: ", content);
    console.log("thumb: ", thumb);

    if (!container || !content || !thumb) return;

    // Reposition scrollbar on load and resize
    const positionScrollbar = () => {
      const containerRect = container.getBoundingClientRect();
      const scrollbar = document.querySelector(".custom-scrollbar-vertical");
      const offset = 15;
      // Position the scrollbar at the right edge of the container
      scrollbar.style.right = `${
        window.innerWidth - containerRect.right - offset
      }px`;
      scrollbar.style.top = `${containerRect.top}px`;
      scrollbar.style.height = `${containerRect.height}px`;
    };

    // Position scrollbar initially and on resize
    positionScrollbar();
    window.addEventListener("resize", positionScrollbar);

    // Helper functions to disable and enable text selection
    const disableTextSelection = () => {
      document.body.style.userSelect = "none"; // Disable text selection
    };

    const enableTextSelection = () => {
      document.body.style.userSelect = ""; // Re-enable text selection
    };

    const updateThumbPosition = () => {
      const contentHeight = content.scrollHeight;
      const containerHeight = container.clientHeight;
      const scrollTop = container.scrollTop;

      // Calculate thumb height proportionally with a minimum size
      const thumbHeight = Math.max(
        (containerHeight / contentHeight) * containerHeight,
        30 // Minimum thumb height
      );

      // Calculate thumb position
      const scrollableHeight = contentHeight - containerHeight;
      const scrollRatio =
        scrollableHeight <= 0 ? 0 : scrollTop / scrollableHeight;
      const maxThumbTop = containerHeight - thumbHeight;
      const thumbTop = scrollRatio * maxThumbTop;

      thumb.style.height = `${thumbHeight}px`;
      thumb.style.top = `${thumbTop}px`;
    };

    container.addEventListener("scroll", updateThumbPosition);
    updateThumbPosition();

    const handleMouseDown = function (e) {
      e.preventDefault();
      disableTextSelection();

      // Get the container and scrollbar bounds for positioning
      const containerRect = container.getBoundingClientRect();
      const thumbRect = thumb.getBoundingClientRect();

      // Calculate the initial position
      const startY = e.clientY;
      const startTop = thumbRect.top - containerRect.top;

      const onMouseMove = function (e) {
        // Calculate the new position relative to the container
        const deltaY = e.clientY - startY;

        // Ensure the thumb stays within the scrollbar bounds
        const newTop = Math.min(
          containerRect.height - thumbRect.height,
          Math.max(0, startTop + deltaY)
        );

        // Position the thumb
        thumb.style.top = `${newTop}px`;

        // Calculate scroll position
        const scrollRatio = newTop / (containerRect.height - thumbRect.height);
        const maxScrollTop = content.scrollHeight - containerRect.height;

        // Update scroll position
        container.scrollTop = scrollRatio * maxScrollTop;
      };

      const onMouseUp = function () {
        enableTextSelection();
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    thumb.addEventListener("mousedown", handleMouseDown);

    // Define the touch handler as a named function
    const handleTouchStart = function (e) {
      e.preventDefault();
      disableTextSelection();

      const touch = e.touches[0];
      const startY = touch.clientY;
      const startTop = parseFloat(thumb.style.top);

      const onTouchMove = (e) => {
        const touch = e.touches[0];
        const deltaY = touch.clientY - startY;
        const newTop = Math.min(
          container.clientHeight - thumb.clientHeight,
          Math.max(0, startTop + deltaY)
        );
        thumb.style.top = `${newTop}px`;

        const scrollRatio =
          newTop / (container.clientHeight - thumb.clientHeight);
        const maxScrollTop = content.scrollHeight - container.clientHeight;
        container.scrollTop = scrollRatio * maxScrollTop;
      };

      const onTouchEnd = () => {
        enableTextSelection();
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
      };

      document.addEventListener("touchmove", onTouchMove, { passive: false });
      document.addEventListener("touchend", onTouchEnd, { once: true });
    };

    // Add the event listener using the named function
    thumb.addEventListener("touchstart", handleTouchStart);

    return () => {
      container.removeEventListener("scroll", updateThumbPosition);
      thumb.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("resize", positionScrollbar);
    };
  }, []);

  return (
    <div className="container-vertical">
      <div className="scroll-content-vertical">
        {ChanceAndSequenceImages.map((image, index) => (
          <div key={index} className="image-item-vertical">
            <img
              src={image.src}
              alt={`Chance and Sequence ${index + 1}`}
              className="img-fluid-vertical"
            />
          </div>
        ))}
        <div className="chanceAndSequenceComp-text">
          <p className="title-text-chance" style={{ color: "black" }}>
            How to Sit (Twenty Ways to Sit On a Stool)
          </p>
          <p className="main-text-chance">
            This sequence of photos was based around a book I picked found at a
            yard sale which has many memories associated with it. It is in
            Chinese but the name of the book is How to Sit. I decided to use
            this as inspiration because I could not actually read the book. I
            also used my stool I recently bought as a stimulus , which is in the
            photographs, and how, without a back, there are many more positions
            I could sit in through the many hours of being at my desk. I used
            chance to make this sequence by using a random number generator,
            between the numbers of 1-4, which dictated how many limbs could be
            on the stool whilst I sit and read this book. John Cage’s 4’33” was
            the foundation to this work as his video piece showed how much
            chance is in art. The piece will always be different when performed
            as it depends entirely of the sounds the audience makes- such as the
            shuffles, their coughs and any noise coming from somewhere else.
            However, one thing will stay the same which is the length of the
            piece always being 4 minutes and 33 seconds. This is how I wrapped
            my head around the concept of chance, understanding that there will
            always be controlled and dependent variables. In my case my control
            was the seat and that there would always be a limb touching it in
            some way but the dependent variable was the number of limbs on the
            stool as well as how I, in the moment, could think of a position.
            Someone else may think completely differently and interpret the
            concept of limbs in a different way; possibly using only a finger as
            one body part or counting the leg and foot as two. I thought of this
            after looking at the work of Ed Rusha: through the thought of
            differing interpretations of the same instruction. For his
            photography series of Thirty-four parking lots in Los Angeles he
            asked someone else to go up on a helicopter to take these arial
            shots. Depending on who he asked he would have got a completely
            different outcome due to their interpretation of the instructions.
            Erwin Wurm influenced me to use the body as a medium in his video of
            59 Positions in which people use clothes and the shape of their body
            to create these organic shapes through their contortions as well as
            the nature of the fabric. I have also tried to create my body as
            simply a shape rather than the human self. I have chosen clothes
            that hug the body. I would have liked to gone further with this idea
            and completely isolate the body as just a shape by using a plain
            background and covering my face and hands etc, possibly in some sort
            of suit. I did make the pictures black and white though so that less
            focus was on colour and more on form, although not as much as I
            would have liked. On the other hand, my room gave another idea of
            normality rather than focusing on the body which draws the focus
            back to my stimulus of my stool and how I am shifting my position
            whilst I sit at it. So overall, I think it was successful.{" "}
          </p>
          <p className="main-text-chance">
            I think John Cage’s work however, was the most influential and
            opened my mind to the presence of chance in art. I would like to
            maybe do this task again and use the same instructions but give them
            to other people and therefore, have a series of other minds’
            interpretation. No work can ever be entirely copied just as any
            performance of play will never be exactly the same.{" "}
          </p>
        </div>
        <div className="container-last-chance">
          <div className="images-last-chance">
            <img src={image1} alt="" className="img-fluid-horizontal" />
            <img src={image2} alt="" className="img-fluid-horizontal" />
          </div>
        </div>
      </div>
      <div className="custom-scrollbar-vertical">
        <div className="scrollbar-thumb-vertical">
          <span className="scrollbar-text-vertical">
            s<br />
            c<br />
            r<br />
            o<br />
            l<br />
            l<br />
            <br />
            m<br />e
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChanceAndSequenceComp;

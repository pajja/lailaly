import React, { useEffect } from "react";
import "../styles/futuresComp2.css";

const WomanhoodComp7 = () => {
  useEffect(() => {
    const container = document.querySelector(".container-vertical-futures2");
    const content = document.querySelector(".scroll-content-vertical-futures2");
    const thumb = document.querySelector(
      ".custom-scrollbar-vertical.w7 .scrollbar-thumb-vertical"
    );
    const scrollbar = document.querySelector(".custom-scrollbar-vertical.w7");

    console.log("container: ", container);
    console.log("content: ", content);
    console.log("thumb: ", thumb);
    console.log("scrollbar: ", scrollbar);

    if (!container || !content || !thumb || !scrollbar) {
      console.error("Elements not found", {
        container,
        content,
        thumb,
        scrollbar,
      });
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
      const contentHeight = content.scrollHeight;
      const containerHeight = container.clientHeight;
      const scrollTop = container.scrollTop;

      const thumbHeight = Math.max(
        (containerHeight / contentHeight) * containerHeight,
        30 // Set a minimum thumb height
      );
      const thumbTop = (scrollTop / contentHeight) * containerHeight;

      thumb.style.height = `${thumbHeight}px`;
      thumb.style.top = `${thumbTop}px`;
    };

    container.addEventListener("scroll", updateThumbPosition);
    updateThumbPosition();

    thumb.addEventListener("mousedown", function (e) {
      disableTextSelection(); // Disable text selection on drag
      const startY = e.clientY;
      const startTop = parseFloat(thumb.style.top);
      const onMouseMove = (e) => {
        const deltaY = e.clientY - startY;
        const newTop = Math.min(
          container.clientHeight - thumb.clientHeight,
          Math.max(0, startTop + deltaY)
        );
        thumb.style.top = `${newTop}px`;

        // Adjust the scroll position based on the thumb's new position
        const scrollRatio =
          newTop / (container.clientHeight - thumb.clientHeight);

        const maxScrollTop = content.scrollHeight - container.clientHeight;
        container.scrollTop = scrollRatio * maxScrollTop;
      };

      const onMouseUp = () => {
        enableTextSelection(); // Re-enable text selection when drag ends
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp, { once: true });
    });

    // Improved touch handler for mobile devices
    const handleTouchStart = function (e) {
      e.preventDefault();
      disableTextSelection();

      const touch = e.touches[0];
      const startY = touch.clientY;

      // Get current top position or default to 0
      const currentTop = thumb.style.top ? parseFloat(thumb.style.top) : 0;
      console.log("Touch start - startY:", startY, "currentTop:", currentTop);

      const onTouchMove = (e) => {
        e.preventDefault(); // Prevent scrolling while dragging
        const touch = e.touches[0];
        const deltaY = touch.clientY - startY;

        // Calculate new position with bounds checking
        const thumbHeight = thumb.offsetHeight;
        const maxTop = container.clientHeight - thumbHeight;
        const newTop = Math.max(0, Math.min(maxTop, currentTop + deltaY));

        thumb.style.top = `${newTop}px`;

        // Calculate scroll position based on thumb position
        const scrollRatio = newTop / (maxTop || 1); // Avoid division by zero
        const maxScrollTop = content.scrollHeight - container.clientHeight;
        const newScrollTop = scrollRatio * maxScrollTop;

        container.scrollTop = newScrollTop;
      };

      const onTouchEnd = () => {
        console.log("Touch end event triggered");
        enableTextSelection();
        document.removeEventListener("touchmove", onTouchMove, {
          passive: false,
        });
        document.removeEventListener("touchend", onTouchEnd);
      };

      // Use passive: false to allow preventDefault in touchmove
      document.addEventListener("touchmove", onTouchMove, { passive: false });
      document.addEventListener("touchend", onTouchEnd);
    };

    // Add the event listener using the named function
    thumb.addEventListener("touchstart", handleTouchStart, { passive: false });

    // Add this new function to position the scrollbar at the right edge of container
    const positionScrollbar = () => {
      const containerRect = container.getBoundingClientRect();
      const offset = 5; // Adjust this value to control the gap between container and scrollbar

      // Set the right position to stick to the container edge
      scrollbar.style.right = `${
        window.innerWidth - containerRect.right - offset
      }px`;
      scrollbar.style.top = `${containerRect.top}px`;
      scrollbar.style.height = `${containerRect.height}px`;

      // Update thumb position after repositioning
      updateThumbPosition();

      // Debug info for positioning
      console.log("Positioned scrollbar:", {
        right: scrollbar.style.right,
        top: scrollbar.style.top,
        height: scrollbar.style.height,
      });
    };

    // Run on load and whenever window is resized
    positionScrollbar();
    window.addEventListener("resize", positionScrollbar);

    return () => {
      container.removeEventListener("scroll", updateThumbPosition);
      thumb.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("resize", positionScrollbar);
    };
  }, []);

  return (
    <div className="container-vertical-futures2 w7">
      <div className="scroll-content-vertical-futures2">
        <div className="womanhood-7-3">
          <div className="times-new-roman">
            <a
              href="https://docs.google.com/presentation/d/1rZHBxCStT1x1JZ5BbWboeYcxa7YSCuEU9bknt1Qskxs/edit?usp=sharing"
              target="_blank"
            >
              Link to the presentation
            </a>
          </div>
          <p className="main-text times-new-roman w7">
            {" "}
            Presenting my Pecha Kucha went well. I got all my research forward
            clearly and got some good feedback. One piece of insight I received
            was that I should not only be using information from the event that
            was the stimulus of my work, but carry on keeping up with current
            events, changes in laws and use questionnaires to get other
            insights. I have done this by having conversations regarding gender
            and womanhood with my peers. I have found that many have similar
            opinions to me that they may not have expressed before and with this
            shared attitude, experiences of everyday sexism have been
            comfortably shared that I can take on bored whilst discussing
            women’s lives in my work. However, as to keeping up with changes in
            law, there has been not nearly enough sound after the vigils and it
            seems that yet again, women’s lives are just as undervalued as
            before. <br></br> I also received a question after presenting my
            pecha kucha which was, where are the symbols that I have used coming
            from? I thought that I should be doing extra work into the history
            of symbols and possibly their origin however, their presence in
            everyday life is so massive yet unconscious that I feel they speak
            for themselves and the interpretation of each symbol is part of what
            I want my work to stand for; such as with Georgia O’Keefe’s work in
            which there was speculation of her painting female genitalia.
            <br></br>Listening to others present their pecha kuchas was also a
            vital part of my research. A lot of others had explored similar
            topics and others had interesting ways of working. I took notes on
            their presentations and plan on bringing in elements of their work.
            For example, someone who’s topic surrounded children’s art used a
            specific colour palette, primary and bright non- gendered colours,
            to emulate the colours that children are attracted to and surrounded
            by. They also touched on the thought of drawing just for the sake of
            drawing, which children do so much and so naturally, usually until
            they start school. Someone else used a lot of scientific imagery in
            their work, such as the eye and microscopic images. I took some
            inspiration from this and have been looking at diagrams used in sex
            education in schools and have used some of these shapes in recent
            monotypes. The technique of 'frottage' was also mentioned in the
            context of Max Ernst's work. He struggled with the blank canvas and
            instead started to use rubbings and then his imagination to create
            art from the shapes found. I would like to draw on this technique to
            create pieces out of the monotypes I have done that have not come
            out exactly as I wanted but still have potential of being something.{" "}
          </p>
        </div>
      </div>
      <div className="custom-scrollbar-vertical w7">
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

export default WomanhoodComp7;

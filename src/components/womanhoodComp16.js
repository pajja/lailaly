import React, { useEffect } from "react";
import "../styles/futuresComp2.css";
import "../styles/womanhoodComp.css";

const WomanhoodComp16 = () => {
  useEffect(() => {
    const container = document.querySelector(".container-vertical-futures2");
    const content = document.querySelector(".scroll-content-vertical-futures2");
    const thumb = document.querySelector(".scrollbar-thumb-vertical");
    const scrollbar = document.querySelector(".custom-scrollbar-vertical");

    console.log("container: ", container);
    console.log("content: ", content);
    console.log("thumb: ", thumb);

    if (!container || !content || !thumb || !scrollbar) return;

    // Helper functions to disable and enable text selection
    const disableTextSelection = () => {
      document.body.style.userSelect = "none"; // Disable text selection
    };

    const enableTextSelection = () => {
      document.body.style.userSelect = ""; // Re-enable text selection
    };

    // Position the scrollbar at the right edge of the container
    const positionScrollbar = () => {
      const containerRect = container.getBoundingClientRect();
      const offset = 0; // Adjust this value as needed

      // Set the right position to stick to the container edge
      scrollbar.style.right = `${
        window.innerWidth - containerRect.right - offset
      }px`;
      scrollbar.style.top = `${containerRect.top}px`;
      scrollbar.style.height = `${containerRect.height}px`;
    };

    // Run on load and whenever window is resized
    positionScrollbar();
    window.addEventListener("resize", positionScrollbar);

    const updateThumbPosition = () => {
      const contentHeight = content.scrollHeight;
      console.log("contentHeight: ", contentHeight);
      const containerHeight = container.clientHeight;
      console.log("containerHeight: ", containerHeight);
      const scrollTop = container.scrollTop;

      const thumbHeight = Math.max(
        (containerHeight / contentHeight) * containerHeight,
        10 // Set a minimum thumb height
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
      window.removeEventListener("resize", positionScrollbar); // Clean up resize listener
    };
  }, []);

  return (
    <div className="container-vertical-futures2">
      <div className="scroll-content-vertical-futures2 womanhood-centered">
        <div className="womanhood-7-3 womanhood-16">
          <p className="main-text times-new-roman">
            On reflecting on my time during my FMP, I feel my work has been
            successful. I have tackled complex, controversial and deep topics
            throughout Womanhood such as the root of the patriarchy, the male
            gaze and the reduction of women to the body. It has been a
            challenging process; especially as I aimed to create work that was
            impactful to every audience. Listening to feedback has ensured I
            have done this. <br></br> An example of group discussions leading to
            progress in my work is when I presented my first triptych of prints
            and was met with confusion. The irony of my work was misunderstood
            and I was told I had ‘tunnel vision’ to only associate women with
            pregnancy. This was where the confusion lay as this was the exact
            thing I was representing in my work that I see in the patriarchal
            society. I was disheartened by this however, receiving this feedback
            forced me to move forward into not only the root cause of the
            turmoils of womanhood but look into how these root causes have
            affected everyday life in a more obvious sense. I made my work more
            provocative and shocking to do this, as my main aim was to create a
            body of work that invokes emotions on the audience. Another
            challenge I met on the course was time management. Fine art sessions
            had been changed from Friday to Wednesday afternoon. I have a part
            time job as well as my studies and had said before the change that
            Friday was the day I would not come in. This meant I was working for
            a lot of the Wednesday sessions and I could not get out of this
            schedule for a month, by the time the course would be over. I missed
            a lot of important discussion and group feedback, including the peer
            assessment session. This has on the other hand, forced me to be more
            self directed and be keen to ask for feedback whenever I can.{" "}
            <br></br> I have been successful in tackling my aim to create a
            series of work. However, if I were to carry on this project to
            create a final piece and have a show, I would most likely tackle the
            concept of gender more strongly. I have of course touched on it in
            Womanhood as that is inevitable. In my Pecha Kucha I researched some
            artists that looked into gender as their topic, Jes Fan for example.
            I think it is also a topical subject with the recent awareness of
            gender fluidity, pronoun choice, neo-pronouns and the transgender
            community, which is sometimes met with disdain. I would like to
            define the concept of gender and explore its complexities. <br></br>{" "}
            Considering how I would present my art in a gallery is interesting.
            I would want a large room inside a gallery which was not a square
            but rather you would have to walk through it. This would give time
            for the audience to not just glimpse over some pieces more than
            others but be so engaged they are swept through to the end room. I
            would want this room to be small and have all four walls covered
            with my A4 black and yellow prints. It would create an experience of
            imagery associated with Womanhood and become this sanctuary of
            female experience; which could either prove a challenging place or a
            safe space. I would want all my work to be framed simply. With large
            white borders and thick cream wooden frames. I want the eye to be
            drawn to the details of the work and not distracted by anything
            else. I am pleased with my work and would love to have been able to
            create a final piece and expand on the FMP.
          </p>
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

export default WomanhoodComp16;

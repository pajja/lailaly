import React, { useEffect } from "react";
import "../styles/futuresComp1.css";
import Clock from "../assets/futures/poo.jpg";
import Dont from "../assets/futures/IMG_4900_edited_edited.jpg";

const FuturesComp1 = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const content = document.querySelector(".scroll-content-futures1");
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
      <div className="scroll-content-futures1 times-new-roman">
        <div className="text-container-futures first-f1">
          <div className="main-text">
            <div className="columns-two">
              <p>
                Alain de Botton - the philosopher, author and art critic- talks
                about the value of time and the changing perception of time when
                discussing Christian Marclay's The Clock. De Botton discusses
                with Marclay the feeling the audience gets when sitting,
                watching The Clock. Marclay agrees with him that it is extremely
                anxiety inducing as we are constantly conscious of the time,
                being reminded of it every couple of seconds almost like a count
                down. Time is precious and, as Benjamin Franklin said, time is
                money. The power that time holds, although be it a social
                construction, means that we all live under its control and
                oppression especially in this age of modern capitalism in which
                time is a matter of life and death to most. We must 'please,
                tame and get on top of (it)' in order to survive. De Botton
                refers to this as living under 'the tyranny of time'. We are so
                conscious of the minutes, days and months ticking away when we
                feel we are wasting out time that we do anything to avoid this
                feeling.
              </p>
            </div>
          </div>
          <div className="clock-image">
            <img src={Clock} alt="Christian Marclay's The Clock" />
            <p className="image-description">Christian Marclay's The Clock</p>
          </div>
        </div>
        <div className="text-container-futures second-f1">
          {" "}
          <div className="main-text">
            <div className="columns-two">
              <p>
                In lockdown however, the perception of time is like no other in
                life. Time is moving so fast. Although there is little to do
                because there are no events it feels like one long day. There is
                nothing to distinguish time in, very unlike The Clock. The days
                also do not feel long but feel fast. If there is a task to do I
                will put it off the whole day and be lazy because I know there
                is no deadline and no point- I can just do it tomorrow because
                there is nothing to do tomorrow. There is little motivation to
                do anything. So the day is spent in the same position on the bed
                and before I know it it's time for dinner and to sleep. This
                could be over thought and I could think that life would always
                be this awful sense of time slipping away and my life being
                spent doing nothing but there is one comforting thing knowing
                that we have done this before and in the future will be looking
                back at this time of life as one big chunk- not needing to
                distinguish each days as we move forward into the hopeful
                future. Time also feels fast as I am agitated. Every day that I
                am in lockdown I feel anxious and restless to get out. With each
                day I am on a treadmill churning out these days of waste and I
                cannot stop. We are already in February and I haven't seen my
                friends since November or December. March is fast approaching.
                How did it all go so fast? And what has even happened?
              </p>
            </div>
          </div>
        </div>
        <div className="text-container-futures third-f1">
          {" "}
          <div className="main-text">
            <p>The future is slipping away into the past.</p>
          </div>
        </div>
        <div className="text-container-futures fourth-f1">
          {" "}
          <div className="main-text">
            <div className="columns-two">
              <p>
                Envisioning the near future promotes as much anxiety as thinking
                about the very distant future and I dare not dream about the
                next few months although there is occasionally a sliver of hope.
                This feeling towards the future is well presented by Oscar
                Murillo's series of paintings entitled Catalyst. The pieces
                started from drawings. Murillo says he feels a drawing is the
                physical discharge of energy and anxiety whilst the painting
                aspect of the piece is filled with allure and romanticism. This
                I feel depicts the dreams and dreads of the future perfectly; it
                can be romanticised with rose tinted glasses as the greener
                grass as well as being enveloped in the fear of unknowing. In my
                work I would like to explore this aspect of the future-the
                future after lockdown and how we envision the next months of our
                lives. With the news of the vaccines and schedules the
                government has placed out with dates, ones' mind wanders around
                the possibilities and how likely it is we will be let down. We
                are tiptoeing on egg shells in our mind whether we should
                survive through this lockdown to get to the other side, the
                future, or concentrate on the near future and bury our heads in
                the small concerns, 'what should I buy at the shops to cook for
                dinner?'. I would like to be able to present the thought of the
                future as both rose tinted and anxiety inducing in my work. I
                would also like to effectively present the claustrophobia that
                comes with lockdown.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="image-futuresComp1 lastf1">
          <img src={Dont} alt="Futures series - Oil on paper" />
          <p className="image-description">Oil on paper 148 x 210</p>
        </div>
      </div>
      <div className="custom-scrollbar f1">
        <div className="scrollbar-thumb f1">
          <span className="scrollbar-text">scroll me</span>
        </div>
      </div>
    </div>
  );
};

export default FuturesComp1;

import React, { useEffect } from "react";
import "../styles/futuresComp2.css";
import ShapeFutures from "../assets/futures/IMG_4875_edited.jpg";
import FearFutures from "../assets/futures/IMG_4897_edited.jpg";

const FuturesComp2 = () => {
  useEffect(() => {
    const container = document.querySelector(
      ".scroll-container-vertical-futures2"
    );
    const content = document.querySelector(".image-grid-vertical-futures2");
    const thumb = document.querySelector(".scrollbar-thumb-vertical");

    console.log("container: ", container);
    console.log("content: ", content);
    console.log("thumb: ", thumb);

    if (!container || !content || !thumb) return;

    // Helper functions to disable and enable text selection
    const disableTextSelection = () => {
      document.body.style.userSelect = "none"; // Disable text selection
    };

    const enableTextSelection = () => {
      document.body.style.userSelect = ""; // Re-enable text selection
    };

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

    return () => {
      container.removeEventListener("scroll", updateThumbPosition);
    };
  }, []);

  return (
    <div className="scroll-container-vertical-futures2">
      <div className="image-grid-vertical-futures2">
        <div className="text-container-futuresComp2 times-new-roman">
          <p className="main-text-futuresComp2">
            The piece above is a product of frustration. I had been trying to
            paint figures however, it wasn't going how I had planned. I realised
            I was wasting time and the piece wouldn't go anywhere so I let
            myself go with the paints that were already on my pallet and portray
            my anxieties on the page. This piece takes elements from this
            experience in the way that under the finished painting there is
            another- a much more rosy one. The painting under is the hopes and
            wants of the near future; when I can see my boyfriend again, when
            the sun shines and when I can explore lands outside of the 500m
            around my house. This is the envision of my imagination, the images
            all together in a dream. I have taken inspiration from two artists
            to paint in this dream like state. Vinna Begin's landscapes and
            James Rozel's surreal paintings both have an unnerving quality to
            them. I feel this is due to the fact that they look rather how we
            imagine images. For example, when asked to draw out or describe
            logos of famous companies, such as timberland or pepsi, we can form
            images of perhaps the colours or some significant shapes, but to get
            it exactly accurate is very difficult despite us seeing these logos
            everywhere all our lives. The images in our mind when imagining
            things are not exactly perfect but rather have more of a sense of
            what is going on, much like with dreams and with my, Begin's and
            Rozel's paintings. I have however, then gone on a step further to
            finish this piece, letting my anxieties and negative thoughts take
            control with charcoal and black oil pastel over the rosy dream. I
            again used what was left on the pallet also to deface the painting.
            This was to portray how our fears and worries will cloud our dreams
            and imaginations for the future. I cut the canvas in half and sewed
            it together to portray these two sides to the feeling of futures and
            their entanglements even further.
          </p>
        </div>
        <div className="image-container-futuresComp2">
          <div>
            <img src={ShapeFutures} alt="Image of shapes | Futures" />
            <p className="image-description times-new-roman">
              Oil and charcoal on unprimed canvas
            </p>
          </div>
          <div>
            <img src={FearFutures} alt="Image of Fear | Futures" />
            <p className="image-description times-new-roman">
              Oil and charcoal on unprimed canvas
            </p>
          </div>
        </div>
      </div>

      <div className="custom-scrollbar-vertical futuresComp2-scroll">
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

export default FuturesComp2;

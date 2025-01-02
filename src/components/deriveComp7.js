import React, { useEffect } from "react";
import "../styles/geoAndDecComp1.css";
import Painting1 from "../assets/derive/IMG_4564_edited.jpg";
import Painting2 from "../assets/derive/rename-1.jpg";
import Painting3 from "../assets/derive/rename-2.jpg";

const DeriveComp7 = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
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
    <div className="container">
      <div className="scroll-content">
        <div className="image-container-geoAndDecComp1 times-new-roman">
          <div className="text-container-deriveComp6 times-new-roman">
            <p className="main-text">
              I wanted to make a larger piece from the leaves I had collected
              but it would have taken a huge amount of time and space which I
              did not have. Therefore, I decided to do some diagrammatic
              drawings to propose the installation and indicated it's scale,
              placement and what it would roughly look like as a piece. Because
              I wanted to use the leaves as my paper and to make this a large
              piece I wanted to use the stitch to create a sort of quilt from
              the leaves by stitching them together - leaving no gaps between
              them. I also thought of stitching the drawing into the leaves
              seeing as I had a larger surface to work on and it would create
              texture. I would use the colour of thread that I had used for the
              previous work of using oils on leaves as I thought they were the
              most organic colours. Firstly I decided to possibly hang the leaf
              tapestry from the ceiling on hooks and have a light shining from
              behind it. The light would mean that the veins in the leaves could
              be seen, the colour would shine out and light would also come
              through the tiny holes created where the needle would have poked
              through. The hanging element would indicate the tapestry nature as
              well as be an intimidating object of nature to the observer. As
              shown, the bottom of the tapestry trails off without such a harsh
              life of where the leaves are stitched next to each other. I felt
              this kept the nature of the leaves and how they fell from the
              trees to the ground where I found them.
            </p>
          </div>
          <div className="image-geoAndDecComp1">
            <img src={Painting1} alt="shapes | futures" />
          </div>
          <div className="text-container-deriveComp6 times-new-roman">
            <p className="main-text">
              Another way I could display this piece was on the wall. These
              natural, fragile, delicate and ephemeral pressed and stitched
              leaves would juxtapose the process of mounting and framing them on
              the white, stark walls of a gallery. The subject could look out of
              place or possibly like a relic. Such as artefacts with rich
              culture and meaning from far away countries are often put on
              plinths and gawked at by the silent public in museums.
            </p>
          </div>
          <div className="image-geoAndDecComp1">
            <img src={Painting2} alt="shapes | futures" />
          </div>
          <div className="text-container-deriveComp6 times-new-roman">
            <p className="main-text">
              I was also interested in expanding on the ephemeral aspect of the
              leaves and their place in nature. A piece displayed in the Berlin
              Jewish Memorial Museum by Menashe Kadishman was inspiration for
              this proposal as I considered having the leaves on the floor. Not
              only would this mimic the 'bed of leaves' in which I found the
              leaves and show the aspect of quilting from the stitches between
              each leaf but with people stepping over the bed, the origin of
              Derive art could be explored. I heard from another student that
              Derive art started from anti-capitalist artists who wanted to
              ensure that there art could not be commodified and become part of
              a a market but instead an experience. With the viewer stepping on
              the leaves as they explored the rest of the gallery, the quilt
              would deteriorate, crack and eventually become bits of dried
              leaves loosely connected by thread. The eventual destruction of it
              ensures this is a collaborative experience with the viewers as
              well as an experience. It would become an installation rather than
              a piece with a price tag that could hang up above the highest
              bidder's weekend dining table.
            </p>
          </div>
          <div className="image-geoAndDecComp1">
            <img src={Painting3} alt="shapes | futures" />
          </div>
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

export default DeriveComp7;

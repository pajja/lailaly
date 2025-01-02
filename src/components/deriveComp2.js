import React, { useEffect } from "react";
import "../styles/geoAndDecComp3.css";
import "../styles/deriveComp2.css";
import shapes1 from "../assets/derive/IMG_3494.HEIC.jpg";
import shapes2 from "../assets/derive/IMG_3466_edited.jpg";
import shapes3 from "../assets/derive/IMG_3416.HEIC.jpg";
import shapes4 from "../assets/derive/IMG_3438.HEIC.jpg";

const DeriveComp2 = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const container = document.querySelector(".container");
      const content = document.querySelector(".scroll-content-geo-dec-3");
      const thumb = document.querySelector(".scrollbar-thumb");

      if (container && content && thumb) {
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
      }
    }, 50); // Small delay (50ms)

    return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts
  }, []);

  return (
    <div className="container">
      <div className="scroll-content-geo-dec-3">
        <div className="text-container-deriveComp2 times-new-roman">
          <p className="main-text">
            The photographs on the right were taken out of interest of texture
            along my walk. I walked pretty slowly and because I already know the
            area, I wasn't interested in the shops and what were in the windows,
            or the people or where I was going. I was allowed to enjoy and
            notice all the smaller things around me. I was also in no rush,
            granted, I probably looked quite weird walking so slowly and
            stopping so often just to bend down and look into the cracks of
            buildings or at bark. I found a lot of similarities between the
            images of textures when they were isolated from the actual object
            that they were. Such as the photograph of the skip, has the same
            intricate twisted and protruding patterns and shapes as that of the
            vines along the wall of the bark. Cornelia Parker also had this
            thought of the isolation of a texture and intricate details in her
            photography work. An example of this is Marks made by Freud in which
            she photographs the indentations and punctures made my Fraud on his
            leather desk chair. The images themselves make no sense without the
            story and just serve as an interesting texture. My photograph of gum
            on a concrete wall could be compared to this and possibly named,
            'Marks made by strangers' or something to this extent. If I was to
            magnify this image even closer into the lines of the old cracking
            chewing gum, the gum itself may even start to look like the cracked
            leather, it could be undistinguishable from each other.
          </p>
        </div>
        <div className="image-container-deriveComp2 times-new-roman">
          <img src={shapes1} alt="Geometric shapes" />
        </div>
        <div className="image-container-deriveComp2 times-new-roman">
          <img src={shapes2} alt="Geometric shapes" />
        </div>
        <div className="image-container-deriveComp2 times-new-roman">
          <img src={shapes3} alt="Geometric shapes" />
        </div>
        <div className="image-container-deriveComp2 times-new-roman">
          <img src={shapes4} alt="Geometric shapes" />
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

export default DeriveComp2;

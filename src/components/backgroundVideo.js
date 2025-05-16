import React, { useEffect, useRef } from "react";
import "../styles/backgroundVideo.css";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const promise = video.play();
          if (promise !== undefined) {
            promise
              .then(() => {
                console.log("Video started");
              })
              .catch((err) => {
                console.warn("Autoplay blocked", err);
              });
          }
        }, 200); // Delay helps bypass timing issues
      });
    };

    tryPlay();
  }, []);

  return (
    <video
      ref={videoRef}
      className="background-video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/elegia-short-animation-1s-output.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;

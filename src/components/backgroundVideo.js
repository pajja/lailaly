import React, { useEffect, useRef } from "react";
import "../styles/backgroundVideo.css";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Try to play the video as soon as it's ready
      const tryPlay = async () => {
        try {
          await video.play();
        } catch (err) {
          // Some mobile browsers block autoplay with play() even when muted
          console.warn("Autoplay failed:", err);
        }
      };

      // Ensure it's triggered after DOM update
      setTimeout(tryPlay, 100); // short delay to avoid race condition
    }
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

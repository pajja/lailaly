import React, { useEffect, useRef } from "react";
import "../styles/backgroundVideo.css";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleCanPlay = () => {
      // Try to play when it's fully ready
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay success
            console.log("Video autoplayed successfully.");
          })
          .catch((error) => {
            // Autoplay failed
            console.warn("Video autoplay failed:", error);
          });
      }
    };

    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
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

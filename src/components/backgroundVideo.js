import React, { useEffect, useRef } from "react";
import "../styles/backgroundVideo.css";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasPlayed = false;

    const playVideo = () => {
      if (hasPlayed) return;

      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            console.log("Video started");
            hasPlayed = true;
            // Remove event listeners once video plays
            removeEventListeners();
          })
          .catch((err) => {
            console.warn("Video play failed", err);
          });
      }
    };

    const removeEventListeners = () => {
      document.removeEventListener("click", playVideo);
      document.removeEventListener("scroll", playVideo);
      document.removeEventListener("touchstart", playVideo);
      document.removeEventListener("keydown", playVideo);
    };

    // Try to play immediately when video is ready
    const handleCanPlay = () => {
      playVideo();
    };

    // Add event listeners for user interaction
    const addEventListeners = () => {
      document.addEventListener("click", playVideo, { once: true });
      document.addEventListener("scroll", playVideo, { once: true });
      document.addEventListener("touchstart", playVideo, { once: true });
      document.addEventListener("keydown", playVideo, { once: true });
    };

    // Wait for video to be ready
    video.addEventListener("canplay", handleCanPlay);

    // Try initial play attempt
    setTimeout(() => {
      if (!hasPlayed) {
        playVideo();
      }
    }, 100);

    // Add interaction listeners as fallback
    addEventListeners();

    return () => {
      removeEventListeners();
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <div className="background-video-container">
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/elegia-short-animation-1s-output.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;

import React from "react";
import "../styles/backgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <video className="background-video" autoPlay loop muted playsInline>
      <source src="/elegia-short-animation-1s.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;

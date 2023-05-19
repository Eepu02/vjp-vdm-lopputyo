import React from "react";


const src="https://www.youtube.com/embed/tnHT0XKO2Gk";

const Video = () => {
  return (
    
    <iframe
      width="320"
      height="568"
      src={src}
      title="Youtube video player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Video;
import React from "react";

const Strokes = ({ images, video }) => {
  return (
    <div className="strokes images">
      {images.map((url) => (
        <img key={url} src={url} alt="stroke" />
      ))}
      {video && (
        <video autoPlay loop>
          {video.webm && <source src={video.webm} type="video/webm" />}
          {video.mp4 && <source src={video.mp4} type="video/mp4" />}
        </video>
      )}
    </div>
  );
};

export default Strokes;

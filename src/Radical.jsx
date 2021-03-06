import React from "react";

const Strokes = ({ character, strokes, image, meaning, animation }) => {
  return (
    <div className="radical">
      <p>
        <span className="grey">radical</span> {character} {meaning}
      </p>
      <div className="images">
        <img src={image} alt="radical" />
        {animation.map((img) => (
          <img src={img} alt="anim" />
        ))}
      </div>
    </div>
  );
};

export default Strokes;

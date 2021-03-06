import React from "react";

import Audio from "./Audio";

const Examples = ({ items }) => {
  return (
    <div className="examples">
      {items.map(({ japanese, meaning, audio }) => (
        <>
          <span>{japanese}</span>
          <span className="grey">{meaning.english}</span>
          {audio && <Audio audio={audio} />}
        </>
      ))}
    </div>
  );
};

export default Examples;

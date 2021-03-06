import React, { useCallback, useRef } from "react";

const Audio = ({ audio }) => {
  const ref = useRef(null);

  const play = useCallback(() => {
    if (ref.current) {
      ref.current.volume = 0.5;
      ref.current.play();
    }
  }, []);

  return (
    <>
      <svg onClick={play} viewBox="0 0 100 100">
        <path d="M 0 0 0 100 100 50 Z" />
      </svg>
      <audio ref={ref}>
        {Object.keys(audio).map((type) => (
          <source key={type} src={audio[type]} type={`audio/${type}`} />
        ))}
      </audio>
    </>
  );
};
export default Audio;

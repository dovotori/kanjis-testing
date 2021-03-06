import React, { useMemo, useEffect, useCallback, useState } from "react";

import Kanji from "./Kanji";

const Test = ({ mode, items = {}, goBack }) => {
  const ids = useMemo(() => Object.keys(items) || [], [items]);
  const nbItems = ids.length;

  const chooseRandomId = useCallback(
    () => ids[Math.floor(Math.random() * nbItems)],
    [nbItems, ids]
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const [id, setId] = useState(chooseRandomId());

  useEffect(() => {
    setId(chooseRandomId());
  }, [nbItems, chooseRandomId]);

  useEffect(() => {
    setShowAnswer(false);
  }, [mode]);

  const onNext = useCallback(() => {
    setShowAnswer(false);
    setId(chooseRandomId());
  }, [chooseRandomId]);

  const showResponse = useCallback(() => setShowAnswer(true), []);

  const globalNext = useCallback(() => {
    if (showAnswer) {
      onNext();
    } else {
      showResponse();
    }
  }, [showAnswer, onNext, showResponse]);

  const handleKeyboard = useCallback(
    (e) => {
      switch (e.keyCode) {
        default:
          break;
        case 32:
        case 39:
          globalNext();
          break;
      }
    },
    [globalNext]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyboard, false);
    return () => {
      window.removeEventListener("keyup", handleKeyboard, false);
    };
  }, [handleKeyboard]);

  return (
    <>
      <Kanji id={id} showAnswer={showAnswer} mode={mode} />
      <div className="btn">
        {goBack && <button onClick={goBack}>goBack</button>}
        <button onClick={globalNext}>Next &gt;</button>
      </div>
    </>
  );
};

export default Test;

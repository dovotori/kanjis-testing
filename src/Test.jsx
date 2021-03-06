import React, { useMemo, useEffect, useCallback, useState } from "react";

const Test = ({ mode, items = {} }) => {
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

  const currentItem = useMemo(() => items[id] || {}, [items, id]);

  const {
    pronunciation = "",
    value = "",
    translation = "",
    onyomi = null,
    kunyomi = ""
  } = currentItem;

  const question = useMemo(() => (mode === 0 ? translation : value), [
    mode,
    translation,
    value
  ]);
  const answer = useMemo(() => (mode !== 0 ? translation : value), [
    mode,
    translation,
    value
  ]);

  return (
    <>
      <h1 style={{ fontSize: `${mode !== 0 ? 4 : 1}em` }}>{question}</h1>
      {showAnswer && (
        <>
          <h1 style={{ fontSize: `${mode === 0 ? 4 : 1}em` }}>{answer}</h1>
          <p>{pronunciation}</p>
          {kunyomi && (
            <>
              <p className="small">kunyomi</p>
              {kunyomi.map((p) => (
                <p>{p}</p>
              ))}
            </>
          )}
          {onyomi && (
            <>
              <p className="small">onyomi</p>
              {onyomi.map((p) => (
                <p>{p}</p>
              ))}
            </>
          )}
        </>
      )}
      <div className="btn">
        <button onClick={globalNext}>Next &gt;</button>
      </div>
    </>
  );
};

export default Test;

import React, { useState, useEffect, useMemo } from "react";

import ask from "./api";
import Examples from "./Examples";
import Strokes from "./Strokes";
import Radical from "./Radical";

const Kanji = ({ id, showAnswer, mode }) => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const test = async () => {
      const selection = await ask({ kanji: id });
      setData(selection);
      setIsFetching(false);
    };
    test();
  }, [id]);

  const kanji = useMemo(() => data?.kanji, [data]);

  const question = useMemo(
    () => (mode === 0 ? kanji?.meaning.english : kanji?.character),
    [mode, kanji]
  );

  const answer = useMemo(
    () => (mode !== 0 ? kanji?.meaning.english : kanji?.character),
    [mode, kanji]
  );

  if (data?.error) return "Error";
  if (data === null || isFetching) return "Loading...";

  return (
    <div className="kanji">
      <div className="grid">
        <h1 style={{ fontSize: `${mode !== 0 ? 4 : 1}em` }}>{question}</h1>
        {showAnswer && (
          <>
            <h1 style={{ fontSize: `${mode === 0 ? 4 : 1}em` }}>{answer}</h1>
            <div>
              {kanji?.onyomi && (
                <p>
                  <span className="grey">onyomi</span> {kanji.onyomi.katakana}
                </p>
              )}
              {kanji?.kunyomi && (
                <p>
                  <span className="grey">kunyomi</span> {kanji.kunyomi.hiragana}
                </p>
              )}
            </div>
          </>
        )}
      </div>
      {showAnswer && (
        <>
          <Examples items={data?.examples || []} />
          <Strokes
            count={kanji?.strokes?.count}
            images={kanji?.strokes?.images || []}
            video={kanji?.video}
          />
          <Radical
            character={data?.radical?.character}
            strokes={data?.radical?.strokes}
            image={data?.radical?.image}
            meaning={data?.radical?.meaning?.english}
            animation={data?.radical?.animation}
          />
        </>
      )}
    </div>
  );
};

export default Kanji;

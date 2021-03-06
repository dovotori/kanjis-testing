import React, { useState, useEffect, useCallback } from "react";

import ask from "./api";

const Selection = ({ toggleSelection, addToSelection, selection }) => {
  const [kanjis, setKanjis] = useState([]);
  const [grade, setGrade] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const test = async () => {
      const selection = await ask({ grade: String(grade) });
      setKanjis(selection);
      setIsFetching(false);
    };
    test();
  }, [grade]);

  const selectAll = useCallback(() => {
    addToSelection(
      kanjis.reduce((acc, cur) => {
        const id = cur.kanji.character;
        acc[id] = id;
        return acc;
      }, {})
    );
  }, [kanjis, addToSelection]);

  return (
    <>
      <p className="small grades">
        {[1, 2, 3, 4, 5].map((id) => (
          <span
            className={id === grade ? "selected" : ""}
            key={id}
            onClick={() => setGrade(id)}
          >
            {id}
          </span>
        ))}
      </p>
      {isFetching ? (
        "Loading..."
      ) : (
        <>
          <div className="selection">
            {kanjis.map(({ kanji }, index) => (
              <p
                onClick={() => toggleSelection(kanji.character)}
                key={kanji.character}
                className={selection[kanji.character] ? "selected" : ""}
              >
                {kanji.character}
              </p>
            ))}
          </div>
          <p className="small grades">
            <span onClick={selectAll}>select all grade</span>
          </p>
        </>
      )}
    </>
  );
};

export default Selection;

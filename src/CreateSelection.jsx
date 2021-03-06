import React, { useCallback, useState } from "react";

import Selection from "./Selection";
import TestApi from "./TestApi";

const mutateSelection = (selection, id) => {
  let newSelection = { ...selection };
  if (newSelection[id]) {
    delete newSelection[id];
  } else {
    newSelection[id] = id;
  }
  return newSelection;
};

const CreateSelection = ({ mode }) => {
  const [start, setStart] = useState(false);
  const [selection, setSelection] = useState({});
  const toggleSelection = useCallback(
    (id) => {
      setSelection(mutateSelection(selection, id));
    },
    [setSelection, selection]
  );

  const addToSelection = useCallback(
    (addSelection) => {
      let newSelection = { ...selection, ...addSelection };
      setSelection(newSelection);
    },
    [selection]
  );

  const goBack = useCallback(() => {
    setStart(false);
  }, []);

  const goStart = useCallback(() => {
    setStart(true);
  }, []);

  const save = () => {
    window.sessionStorage.setItem("selection", JSON.stringify(selection));
  };

  const load = useCallback(() => {
    setSelection(
      JSON.parse(window.sessionStorage.getItem("selection") || "{}")
    );
  }, []);

  const reset = useCallback(() => {
    window.sessionStorage.removeItem("selection");
    setSelection({});
  }, []);

  const importFile = useCallback((e) => {
    if (e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const result = JSON.parse(reader.result);
        setSelection(result);
      });
      reader.readAsText(e.target.files[0]);
    }
  }, []);

  const download = useCallback(
    (e) => {
      e.preventDefault();
      e.preventDefault();
      const link = document.createElement("a");
      const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(selection));

      link.setAttribute("href", dataStr);
      link.setAttribute("download", "scene.json");
      link.click();
    },
    [selection]
  );

  return start ? (
    <TestApi items={selection} mode={mode} goBack={goBack} />
  ) : (
    <>
      <Selection
        toggleSelection={toggleSelection}
        addToSelection={addToSelection}
        selection={selection}
      />
      <div className="btn">
        <button onClick={save}>Save</button>
        <button onClick={load}>Load form storage</button>
        <button onClick={reset}>Reset</button>
        <button onClick={download}>Download</button>
        <input type="file" onChange={importFile} accept=".json" />
        <button onClick={goStart}>Start</button>
      </div>
    </>
  );
};

export default CreateSelection;

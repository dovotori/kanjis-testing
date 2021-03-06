import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*
const logFormatObject = (str, separator = "**") => {
  const log = str.split("\n").reduce((acc, line, index) => {
    const part = line.split(separator);
    acc[index] = {
      id: index,
      pronunciation: part[1],
      value: part[0],
      translation: part[2],
      jlpt: 5
    };
    return acc;
  }, {});
  console.log(log);
};
logFormatObject(
  ``
);
//*/

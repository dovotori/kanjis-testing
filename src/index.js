import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/*
const logFormatObject = (str, separator = "*") => {
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
  `ゆっくり**lentement
  しっかり**fermement
  きちと**soigneusement
  とても**très
  もっと**encore plus
  かなり**assez
  たくさん**beaucoup
  いっぱい**plein
  少し*すこし*un peu
  ずっと**constamment
  すぐ**immediatement
  間もなく*まもなく*sous peu
  時々*ときどき*de temps en temps
  よく**souvent
  いつも**toujours
  もう**deja
  ついに**enfin
  まだ**encore (dure)
  また**encore (repete)
  多分*たぶん*peut-など**
  確かに*たしかに*certainnement
  必ず*かならず*a coup sûr
  もちろん**bien entendu
  本当に*ほんとうに*vraiment
  やはり**comme on pouvait s'y attendre
  だけ**uniquement
  しか**ne que (uniquement)
  ばかり**ne que (uniquement pejoratif)
  くらい**environ (temps durée)
  ころ**environ (temps commencement)
  もど**comme (comparaison)
  など**etc
  こす**pour sûr
  さえ**même (etonnement)
  ども**même (etonnement extreme)
  `
);
//*/

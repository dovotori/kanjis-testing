import React from "react";

import Drawer from "./Drawer";
import values from "/public/data/lessons.json";

const Svg = () => (
  <svg viewBox="0 0 32 32">
    <path d="M 16,2.001 16,10 2,10 l 0,12 14,0 0,8 14,-14 z" />
  </svg>
);

const Verbes = () => {
  return (
    <Drawer label="Verbes">
      <h4>Neutre passé godan</h4>
      <div className="flex">
        <div className="first">
          <p>う</p>
          <p>つ</p>
          <p>る</p>
        </div>
        <Svg />
        <p className="last">った</p>
      </div>
      <div className="separator" />
      <div className="flex">
        <div className="first">
          <p>む</p>
          <p>ぬ</p>
          <p>ぶ</p>
        </div>
        <Svg />
        <p className="last">んだ</p>
      </div>
      <div className="separator" />
      <div className="flex">
        <p className="first">く</p>
        <Svg />
        <p className="last">いた</p>
      </div>
      <div className="separator" />
      <div className="flex">
        <p className="first">ぐ</p>
        <Svg />
        <p className="last">いだ</p>
      </div>
      <div className="separator" />
      <div className="flex">
        <p className="first">す</p>
        <Svg />
        <p className="last">した</p>
      </div>
      <h4>Neutre passé irrégulier</h4>
      <div className="flex">
        <p className="first">する</p>
        <Svg />
        <p className="last">した</p>
      </div>
      <div className="separator" />
      <div className="flex">
        <p className="first">くる</p>
        <Svg />
        <p className="last">きった</p>
      </div>
      <h4>Formes</h4>
      {renderGrid(values.tai)}
    </Drawer>
  );
};

const W = ({ children }) => <span className="cell">{children}</span>;

const renderGrid = ({
  label,
  preneuaff,
  preneuneg,
  prepolaff,
  prepolneg,
  pasneuaff,
  pasneuneg,
  paspolaff,
  paspolneg
}) => (
  <div className="gridi">
    <h4>
      <W>{label}</W>
    </h4>
    <p className="grey">
      <W>neutre</W>
    </p>
    <p className="grey">
      <W>poli</W>
    </p>
    <p className="grey">
      <W>affirmatif</W>
    </p>
    <p className="grey">
      <W>negatif</W>
    </p>
    <p className="grey">
      <W>affirmatif</W>
    </p>
    <p className="grey">
      <W>negatif</W>
    </p>
    <p className="grey">
      <W>present</W>
    </p>
    <p>
      <W>{preneuaff.v}</W>
    </p>
    <p>
      <W>{preneuneg.v}</W>
    </p>
    <p>
      <W>{prepolaff.v}</W>
    </p>
    <p>
      <W>{prepolneg.v}</W>
    </p>
    <p className="grey">
      <W>passé</W>
    </p>
    <p>
      <W>{pasneuaff.v}</W>
    </p>
    <p>
      <W>{pasneuneg.v}</W>
    </p>
    <p>
      <W>{paspolaff.v}</W>
    </p>
    <p>
      <W>{paspolneg.v}</W>
    </p>
  </div>
);

const Expressions = () => {
  return (
    <Drawer label="Expressions">
      <p>
        +た ことがある <span className="grey">avoir déjà expérimenté</span>
      </p>
      <p>
        +て いる / +て ある{" "}
        <span className="grey">
          action en train de se faire (personne / objet)
        </span>
      </p>
      <p>
        +い だす <span className="grey">se mettre soudainement à</span>
      </p>
      <p>
        +い はじめる <span className="grey">commencer à</span>
      </p>
      <p>
        +い にいく / にくる{" "}
        <span className="grey">aller / venir faire qq chose</span>
      </p>
      <p>
        +い すぎる <span className="grey">trop</span>
      </p>
      <p>
        nom + ちゅう / じゅう (中){" "}
        <span className="grey">pendant / partout / tout au long de</span>
      </p>
      <p>
        +て ください <span className="grey">imperatif poli</span>
      </p>
      <p>
        +ない でください <span className="grey">imperatif negatif poli</span>
      </p>
      <p>
        +い たい <span className="grey">vouloir faire qq chose</span>
      </p>
      <p>
        +て はいけません{" "}
        <span className="grey">interdiction, impossibilité</span>
      </p>
      <p>
        +ない (sans le い) + ければなりません{" "}
        <span className="grey">obligation</span>
      </p>
      <p>
        +た ほうがいい{" "}
        <span className="grey">preferable de faire qq chose</span>
      </p>
      <p>
        +る ことができる{" "}
        <span className="grey">être capable de faire qq chose</span>
      </p>
      <p>
        ＋る まえに <span className="grey">avant d'avoir</span>
      </p>
      <p>
        +た あとで <span className="grey">apres avoir</span>
      </p>
      <p>
        +て もいいです <span className="grey">avoir la permission de</span>
      </p>
      <p>
        +ない (sans le い) ＋くてもいいです
        <span className="grey">avoir la permission de ne pas faire</span>
      </p>
      <p>
        +る つもりです <span className="grey">intention de faire qq chose</span>
      </p>
    </Drawer>
  );
};

const Adjectifs = () => {
  return (
    <Drawer label="Adjectifs">
      {renderGrid(values.i)}
      {renderGrid(values.ii)}
      {renderGrid(values.na)}
    </Drawer>
  );
};

const Lessons = () => {
  return (
    <div className="lessons">
      <Verbes />
      <Adjectifs />
      <Expressions />
    </div>
  );
};

export default Lessons;

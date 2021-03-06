import React from "react";

import Drawer from "./Drawer";

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
          <p>u</p>
          <p>tsu</p>
          <p>ru</p>
        </div>
        <Svg />
        <p className="last">tta</p>
      </div>
      <div className="separator" />
      <div className="flex">
        <div className="first">
          <p>mu</p>
          <p>nu</p>
          <p>bu</p>
        </div>
        <Svg />
        <p className="last">nda</p>
      </div>
      <div className="separator" />
      <div className="flex">
        <p className="first">ku</p>
        <Svg />
        <p className="last">ita</p>
      </div>
      <div className="separator" />
      <div className="flex">
        <p className="first">gu</p>
        <Svg />
        <p className="last">ida</p>
      </div>
      <div className="separator" />
      <div className="flex">
        <p className="first">su</p>
        <Svg />
        <p className="last">shita</p>
      </div>
      <h4>Neutre passé irrégulier</h4>
      <div className="flex">
        <p className="first">suru</p>
        <Svg />
        <p className="last">shita</p>
      </div>
      <div className="separator" />
      <div className="flex">
        <p className="first">kuru</p>
        <Svg />
        <p className="last">kitta</p>
      </div>
    </Drawer>
  );
};

const values = {
  i: {
    label: "+i",
    preneuaff: { v: "i" }, // present neutre affirmatif
    preneuneg: { v: "kunai" },
    prepolaff: { v: "desu" },
    prepolneg: { v: "kunaidesu" },
    pasneuaff: { v: "kata" }, // passe neutre affirmatif
    pasneuneg: { v: "kunakata" },
    paspolaff: { v: "katadesu" },
    paspolneg: { v: "kunakatadesu" }
  },
  ii: {
    label: "ii",
    preneuaff: { v: "ii" },
    preneuneg: { v: "yokunai" },
    prepolaff: { v: "yoku" },
    prepolneg: { v: "yokuarimasen" },
    pasneuaff: { v: "yokata" },
    pasneuneg: { v: "yokunakatta" },
    paspolaff: { v: "yokatadesu" },
    paspolneg: { v: "yokuarimasendeshita" }
  },
  na: {
    label: "+na",
    preneuaff: { v: "da" },
    preneuneg: { v: "djanai" },
    prepolaff: { v: "desu" },
    prepolneg: { v: "waarimasen" },
    pasneuaff: { v: "data" },
    pasneuneg: { v: "djanakatta" },
    paspolaff: { v: "deshita" },
    paspolneg: { v: "waarimasendeshita" }
  }
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
    </div>
  );
};

export default Lessons;

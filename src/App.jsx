import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

import "./styles.css";
import Nav from "./Nav";
import Test from "./Test";
import CreateSelection from "./CreateSelection";
import List from "./List";
import Lessons from "./Lessons";

import words from "/public/data/wordsN5.json";
import kanjis from "/public/data/kanjisN5.json";
import page3 from "/public/data/page3.json";
import page4 from "/public/data/page4.json";
import page5 from "/public/data/page5.json";
import page6 from "/public/data/page6.json";

const routes = {
  words,
  page3,
  page4,
  page5,
  page6
};

const MODES = [
  { id: 0, label: "FR to JP" },
  { id: 1, label: "JP to FR" }
];

const App = () => {
  const [mode, setMode] = useState(0);
  return (
    <Router>
      <Nav
        mode={mode}
        modes={MODES}
        setMode={setMode}
        routes={Object.keys(routes)}
      />
      <div className="App">
        <div style={{ margin: "10vh 0" }}>
          <Switch>
            {Object.keys(routes).map((key) => (
              <Route path={`/${key}`} key={key}>
                <Test mode={mode} items={routes[key]} />
              </Route>
            ))}
            <Route path="/selection">
              <CreateSelection mode={mode} />
            </Route>
            <Route path="/list">
              <List sections={routes} />
            </Route>
            <Route path="/lessons">
              <Lessons />
            </Route>
            <Route>
              <Test mode={mode} items={kanjis} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

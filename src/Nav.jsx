import { withRouter } from "react-router-dom";
import React, { useCallback } from "react";

const Nav = ({ mode, modes, setMode, routes, history, location }) => {
  const handleModeChange = useCallback(
    (e) => {
      setMode(parseInt(e.target.value, 10));
      e.target.blur();
    },
    [setMode]
  );

  const handleChange = useCallback(
    (e) => {
      history.push(e.target.value);
      e.target.blur();
    },
    [history]
  );

  return (
    <nav>
      <ul>
        {/*{routes.map((key) => (
          <li key={key}>
            <NavLink to={`/${key}`} activeClassName="selected" exact>
              {key}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/selection" activeClassName="selected" exact>
            Selection
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="selected" exact>
            Kanjis N5
          </NavLink>
        </li>*/}
        <li>
          <select onChange={handleChange}>
            {routes.map((key) => (
              <option
                value={`/${key}`}
                key={key}
                selected={`/${key}` === location.pathname}
              >
                {key}
              </option>
            ))}
            <option
              value="/selection"
              key="/selection"
              selected={"/selection" === location.pathname}
            >
              selection
            </option>
            <option
              value="/list"
              key="/list"
              selected={"/list" === location.pathname}
            >
              list
            </option>
            <option
              value="/lessons"
              key="/lessons"
              selected={"/lessons" === location.pathname}
            >
              lessons
            </option>
            <option value="/" key="/" selected={"/" === location.pathname}>
              kanjis N5
            </option>
          </select>
        </li>
        <li>
          <select onChange={handleModeChange}>
            {modes.map((m) => (
              <option key={m.id} value={m.id} selected={mode === m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </nav>
  );
};
export default withRouter(Nav);

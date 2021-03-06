import React, { useCallback } from "react";

import Drawer from "./Drawer";

const List = ({ sections }) => {
  const drawSection = useCallback((section) => {
    return Object.keys(section).map((i) => {
      const { id, value, translation } = section[i];
      return (
        <p key={id}>
          <span>{value}</span>
          <span>{translation}</span>
        </p>
      );
    });
  }, []);

  return (
    <div className="list">
      {Object.keys(sections).map((key) => {
        return (
          <Drawer key={key} label={key}>
            {drawSection(sections[key])}
          </Drawer>
        );
      })}
    </div>
  );
};

export default List;

import React, { useState, useCallback } from "react";

const Drawer = ({ children, label }) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = useCallback(() => {
    setIsOpened((o) => !o);
  }, []);
  return (
    <section onClick={toggle}>
      <h1>{label}</h1>
      {isOpened && children}
    </section>
  );
};

export default Drawer;

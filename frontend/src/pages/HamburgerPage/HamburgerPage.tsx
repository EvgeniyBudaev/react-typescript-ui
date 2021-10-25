import React, { useState } from "react";
import { Hamburger } from "ui-kit";
import "./HamburgerPage.scss";

export const HamburgerPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <div className="HamburgerPage">
      <h2>Hamburger</h2>
      <Hamburger color="black" isActive={isActive} onClick={handleToggle} />
    </div>
  );
};

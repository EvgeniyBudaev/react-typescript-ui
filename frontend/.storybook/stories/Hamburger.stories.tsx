import React, { useState } from "react";
import { Hamburger } from "ui-kit";

export default { title: "Hamburger" };

export const stories = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <div>
      <div className="story">
        <label>Hamburger</label>
        <Hamburger color="black" isActive={isActive} onClick={handleToggle} />
      </div>
    </div>
  );
};

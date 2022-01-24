import React, { useState } from "react";
import { Overlay } from "ui-kit";

export default { title: "Overlay" };

export const stories = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="story">
        <label>Overlay</label>
        <Overlay isActive={isOpen} onClick={handleClose} />
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Button, Overlay } from "ui-kit";

export const OverlayPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="OverlayPage">
      <Button onClick={handleOpen}>Open</Button>
      <Overlay isActive={isOpen} onClick={handleClose} />
    </section>
  );
};

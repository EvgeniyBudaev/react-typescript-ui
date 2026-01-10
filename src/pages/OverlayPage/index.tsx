import { useState } from "react";
import type { FC } from "react";
import { Title } from "components/Title";
import { Button, Overlay } from "uikit";

export const OverlayPage: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <Title>Overlay</Title>
      <Button onClick={handleOpen}>Open</Button>
      <Overlay isActive={isOpen} onClick={handleClose} />
    </section>
  );
};

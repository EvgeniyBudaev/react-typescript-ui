import React from "react";
import { IconButton } from "ui-kit";
import "./IconButtonPage.scss";

export const IconButtonPage: React.FC = () => {
  const handleClick = (event: React.MouseEvent) => {
    console.log("Event: ", event);
  };

  return (
    <div className="IconButtonPage">
      <h2>IconButton</h2>
      <IconButton type="Telegram" onClick={handleClick} />
      <hr />
      <h2>IconButton Disabled</h2>
      <IconButton isDisabled type="Telegram" />
    </div>
  );
};

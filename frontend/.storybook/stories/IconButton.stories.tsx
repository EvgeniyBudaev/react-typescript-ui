import React from "react";
import { IconButton } from "ui-kit";

export default { title: "IconButton" };

export const stories = () => (
  <div>
    <div className="story">
      <label>IconButton</label>
      <IconButton type="Telegram" />
    </div>
    <div className="story">
      <label>IconButton Disabled</label>
      <IconButton isDisabled type="Telegram" />
    </div>
  </div>
);

import React from "react";
import { Icon } from "ui-kit";
import "./IconPage.scss";

export const IconPage: React.FC = () => {
  return (
    <div className="IconPage">
      <h2>Icon</h2>
      <Icon type="Pdf" />
    </div>
  );
}

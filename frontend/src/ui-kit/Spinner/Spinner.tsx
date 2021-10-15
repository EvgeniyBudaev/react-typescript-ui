import React from "react";
import { Icon } from "ui-kit";
import "./Spinner.scss";

export const Spinner: React.FC = () => {
  return (
    <div className="Spinner">
      <Icon type="Spinner" />
    </div>
  );
};

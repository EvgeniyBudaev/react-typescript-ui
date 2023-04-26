import type { FC } from "react";
import { Icon } from "uikit";
import "./Spinner.scss";

export const Spinner: FC = () => {
  return (
    <div className="Spinner">
      <Icon type="Spinner" />
    </div>
  );
};

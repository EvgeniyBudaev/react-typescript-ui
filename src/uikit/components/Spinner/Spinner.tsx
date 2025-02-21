import { type FC, memo } from "react";
import { Icon } from "uikit";

import type { TSpinnerProps } from "./types";
import "./Spinner.scss";

const SpinnerComponent: FC<TSpinnerProps> = ({ dataTestId = "uikit__spinner" }) => {
  return (
    <div className="Spinner" data-testid={dataTestId}>
      <Icon type="Spinner" />
    </div>
  );
};

SpinnerComponent.displayName = "Spinner";

export const Spinner = memo(SpinnerComponent);

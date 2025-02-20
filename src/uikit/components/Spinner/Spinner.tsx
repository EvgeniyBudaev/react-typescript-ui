import { type FC, memo } from "react";
import { Icon } from "uikit";
import "./Spinner.scss";

type TProps = {
  dataTestId?: string;
};

const SpinnerComponent: FC<TProps> = ({ dataTestId = "uikit__spinner" }) => {
  return (
    <div className="Spinner" data-testid={dataTestId}>
      <Icon type="Spinner" />
    </div>
  );
};

SpinnerComponent.displayName = "Spinner";

export const Spinner = memo(SpinnerComponent);

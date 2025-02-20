import { memo } from "react";
import type { FC } from "react";

export enum EAlert {
  Error = "Error",
  Success = "Success",
  Warning = "Warning",
}

type TProps = {
  className?: string;
  dataTestId?: string;
  description?: string;
  title?: string;
  type?: EAlert;
  onClose?: () => void;
};

const AlertComponent: FC<TProps> = ({
  className,
  dataTestId = "uikit__alert",
  description,
  title,
}) => {
  return (
    <div className={className} data-testid={dataTestId}>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

AlertComponent.displayName = "Alert";

export const Alert = memo(AlertComponent);

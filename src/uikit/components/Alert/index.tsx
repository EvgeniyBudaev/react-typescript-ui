import { memo, type FC } from "react";

import type { TAlertProps } from "./types";

const AlertComponent: FC<TAlertProps> = ({
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

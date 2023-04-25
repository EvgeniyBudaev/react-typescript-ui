import { memo } from "react";
import type { FC } from "react";

export enum EAlert {
  Error = "Error",
  Success = "Success",
  Warning = "Warning",
}

type TProps = {
  className?: string;
  description?: string;
  title?: string;
  type?: EAlert;
  onClose?: () => void;
};

const Component: FC<TProps> = ({ className, description, title }) => {
  return (
    <div className={className}>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export const Alert = memo(Component);

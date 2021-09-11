import React, { DOMAttributes } from "react";
import classNames from "classnames";
import "./Button.scss";

export type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  typeButton?: ButtonType;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  children,
  isDisabled = false,
  typeButton = "button",
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames("Button", className, {
        "Button__disabled": isDisabled,
      })}
      disabled={isDisabled}
      type={typeButton}
      onClick={onClick}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};

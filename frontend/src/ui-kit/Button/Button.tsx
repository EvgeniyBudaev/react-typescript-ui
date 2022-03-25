import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classNames from "classnames";
import { Icon, IconType } from "ui-kit";
import "./Button.scss";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  typeIcon?: IconType;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  children,
  typeIcon,
  isDisabled = false,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={classNames("Button", className, {
        Button__disabled: isDisabled,
      })}
      disabled={isDisabled}
      onClick={onClick}
      data-testid="test-button"
      {...rest}
    >
      {typeIcon && <Icon type={typeIcon} data-testid="test-button-icon" />}
      <span className={typeIcon ? "Button-Text" : ""}>{children}</span>
    </button>
  );
};

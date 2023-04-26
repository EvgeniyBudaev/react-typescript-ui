import { memo } from "react";
import type { ButtonHTMLAttributes, DetailedHTMLProps, FC, MouseEvent } from "react";
import clsx from "clsx";
import { Icon, IconType } from "uikit";
import { TButton } from "./types";
import "./Button.scss";

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  type?: TButton;
  typeIcon?: IconType;
}

const Component: FC<IButtonProps> = ({
  className,
  children,
  isDisabled = false,
  onClick,
  type = "button",
  typeIcon,
  ...rest
}) => {
  return (
    <button
      className={clsx("Button", className, {
        Button__disabled: isDisabled,
      })}
      data-testid="test-button"
      disabled={isDisabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {typeIcon && <Icon type={typeIcon} data-testid="test-button-icon" />}
      <span className={typeIcon ? "Button-Text" : ""}>{children}</span>
    </button>
  );
};

export const Button = memo(Component);

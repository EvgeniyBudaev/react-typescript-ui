import clsx from "clsx";
import { memo } from "react";

import { Icon } from "uikit";

import type { IButtonProps } from "./types";
import "./Button.scss";

const ButtonComponent: FC<IButtonProps> = ({
  className,
  children,
  dataTestId = "uikit__button",
  isActive = false,
  isDisabled = false,
  onClick,
  type = "button",
  typeIcon,
  ...rest
}) => {
  return (
    <button
      className={clsx("Button", className, {
        Button__isDisabled: isDisabled,
        Button__isActive: isActive,
      })}
      data-testid={dataTestId}
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

ButtonComponent.displayName = "Button";

export const Button = memo(ButtonComponent);

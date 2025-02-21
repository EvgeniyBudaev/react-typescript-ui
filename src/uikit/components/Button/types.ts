import type { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from "react";
import type { IconType } from "uikit";

export type TButton = "button" | "reset" | "submit";

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  dataTestId?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  type?: TButton;
  typeIcon?: IconType;
}

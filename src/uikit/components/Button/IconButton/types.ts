import type { MouseEvent } from "react";
import type { IconType } from "uikit";
import type { IButtonProps } from "../types";

export interface IIconButtonProps extends IButtonProps {
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent) => void;
  typeIcon: IconType;
}

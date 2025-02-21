import type { ETextColor } from "uikit";
import type { DOMAttributes } from "react";
import type { IconType } from "./IconType";

export type TColor = `${ETextColor}` | "inherit";

export interface IIconProps extends DOMAttributes<HTMLSpanElement> {
  className?: string;
  color?: TColor;
  dataTestId?: string;
  height?: number;
  size?: number;
  type: IconType;
  width?: number;
}

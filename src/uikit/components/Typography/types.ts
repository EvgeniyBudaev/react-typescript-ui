import type { ETextColor, ETypographyVariant } from "uikit";
import type { ReactNode } from "react";

export type TColor = `${ETextColor}` | "inherit";

export type TTypographyProps = {
  as?: string;
  children?: ReactNode;
  color?: TColor;
  dataTestId?: string;
  htmlFor?: string;
  variant?: ETypographyVariant;
};

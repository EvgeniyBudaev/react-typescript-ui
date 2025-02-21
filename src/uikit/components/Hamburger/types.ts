import type { MouseEvent } from "react";

type TColor = "black" | "white";

export type THamburgerProps = {
  className?: string;
  color?: TColor;
  dataTestId?: string;
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
};

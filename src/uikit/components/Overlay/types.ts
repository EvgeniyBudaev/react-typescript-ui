import type { MouseEvent } from "react";

export type TOverlayProps = {
  className?: string;
  dataTestId?: string;
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
  timeout?: number;
};

import type { ReactNode } from "react";

export type TTooltipCustomProps = {
  behavior?: TTooltipCustomBehaviorType;
  children: ReactNode;
  className?: string;
  content: JSX.Element | string;
  dataTestId?: string;
  placement: TTooltipCustomPlacementType;
};

export type TTooltipCustomPlacementType = "top" | "bottom" | "left" | "right";
export type TTooltipCustomBehaviorType = "click" | "focus" | "hover";

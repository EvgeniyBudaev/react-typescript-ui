import type { PopperProps } from "react-popper";
import type { ReactElement, ReactNode } from "react";

export type TModifiers = PopperProps<any>["modifiers"];
export type TPlacement = PopperProps<any>["placement"];

export type TClasses = {
  arrow?: string;
  popperContent?: string;
  popperElement?: string;
  referenceElement?: string;
  tooltip?: string;
};

export type TTooltipBehaviorType = "click" | "hover";

export type TTooltipProps = {
  as?: string;
  behavior?: TTooltipBehaviorType;
  children?: ReactNode;
  classes?: TClasses;
  dataTestId?: string;
  isOpen?: boolean;
  isVisible?: boolean;
  message: string | ReactElement;
  modifiers?: TModifiers;
  placement?: TPlacement;
  timerDelay?: number;
};

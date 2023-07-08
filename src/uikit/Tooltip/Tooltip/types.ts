import type { PopperProps } from "react-popper";

export type TModifiers = PopperProps<any>["modifiers"];
export type TPlacement = PopperProps<any>["placement"];

export type TClasses = {
  arrow?: string;
  popperContent?: string;
  popperElement?: string;
  referenceElement?: string;
};

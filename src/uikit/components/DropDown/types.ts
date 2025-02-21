import type { ReactNode } from "react";

export type TDropDownClasses = {
  dropDown?: string;
  dropDownPanel?: string;
  dropDownButton?: string;
};

export type TDropDownProps = {
  children?: ReactNode;
  classes?: TDropDownClasses;
  dataTestId?: string;
};

export type TDropDownButtonProps = {
  children?: ReactNode;
  classes?: TDropDownClasses;
};

export type TDropDownPanelProps = {
  children?: ReactNode;
  classes?: TDropDownClasses;
  transition?: number;
};

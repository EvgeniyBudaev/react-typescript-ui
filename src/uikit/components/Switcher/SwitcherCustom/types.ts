import type { ReactNode } from "react";
import type { ESwitcherVariant } from "../enums";

export type TSwitcherCustomProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  isChecked?: boolean;
  variant?: ESwitcherVariant;
};

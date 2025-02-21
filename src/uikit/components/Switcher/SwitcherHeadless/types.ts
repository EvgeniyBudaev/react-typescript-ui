import type { ReactNode } from "react";
import type { ESwitcherVariant } from "../enums";

export type TSwitcherHeadlessProps = {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  variant?: ESwitcherVariant;
};

import type { TSelectOption } from "uikit";

export const getPageSizeOptions = (numbers: number[]): TSelectOption[] =>
  numbers.map((step) => ({
    label: step.toString(),
    value: step.toString(),
  }));

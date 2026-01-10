import type { TSelectOption } from "../../../Select/types";

export const getPageSizeOptions = (numbers: number[]): TSelectOption[] =>
  numbers.map((step) => ({
    label: step.toString(),
    value: step.toString(),
  }));

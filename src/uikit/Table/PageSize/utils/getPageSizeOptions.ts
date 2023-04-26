import { TSelectOption } from "../../../Select";

export const getPageSizeOptions = (numbers: number[]): TSelectOption[] =>
  numbers.map((step) => ({
    label: step.toString(),
    value: step.toString(),
  }));

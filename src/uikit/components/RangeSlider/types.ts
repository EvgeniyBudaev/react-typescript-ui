import type { Dispatch, SetStateAction } from "react";

type TClasses = {
  root?: string;
};

export type TRangeSliderProps = {
  classes?: TClasses;
  isShowTooltip?: boolean;
  max: number;
  min: number;
  onChange?: Dispatch<SetStateAction<number[]>>;
  step: number;
  value: number[];
};

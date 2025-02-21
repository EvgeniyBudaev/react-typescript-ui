import type { CSSProperties, MouseEventHandler } from "react";
import type { ESliderArrow } from "./enums";

export type TSliderArrowProps = {
  backgroundColor?: string;
  className?: string;
  dataTestId?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  opacity?: number;
  style?: CSSProperties;
  styles?: CSSProperties;
  type: ESliderArrow;
};

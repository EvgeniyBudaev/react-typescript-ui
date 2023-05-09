import type { FC } from "react";
import { ETypographyVariant, SliderSimple, Typography } from "uikit";
import { sliderImages } from "./data";

export const SliderPage: FC = () => {
  return (
    <section className="SliderPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Slider simple</Typography>
      <SliderSimple arrows={true} dots={true} fade={true} images={sliderImages} infinite={true} />
    </section>
  );
};

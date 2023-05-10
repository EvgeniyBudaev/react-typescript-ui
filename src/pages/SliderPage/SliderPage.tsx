import type { FC } from "react";
import { ETypographyVariant, SliderSimple, SliderSyncing, Typography } from "uikit";
import { sliderImages } from "./data";
import "./SliderPage.scss";

export const SliderPage: FC = () => {
  return (
    <section className="SliderPage">
      <div className="SliderPage-Title">
        <Typography variant={ETypographyVariant.TextH1Medium}>Slider simple</Typography>
      </div>
      <SliderSimple arrows={true} dots={true} fade={true} images={sliderImages} infinite={true} />
      <hr />
      <div className="SliderPage-Title">
        <Typography variant={ETypographyVariant.TextH1Medium}>Slider syncing</Typography>
      </div>
      <SliderSyncing
        arrowsModal={true}
        focusOnSelect={true}
        images={sliderImages}
        swipeToSlide={true}
      />
    </section>
  );
};

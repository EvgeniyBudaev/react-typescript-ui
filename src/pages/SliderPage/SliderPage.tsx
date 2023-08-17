import type { FC } from "react";
import { Hr, Title } from "components";
import { SliderSimple, SliderSyncing } from "uikit";
import { sliderImages } from "./data";

export const SliderPage: FC = () => {
  return (
    <section>
      <Title>Slider simple</Title>
      <SliderSimple arrows={true} dots={true} fade={true} images={sliderImages} infinite={true} />
      <Hr style={{ margin: "75px 0 25px" }} />
      <Title>Slider syncing</Title>
      <SliderSyncing
        arrowsModal={true}
        focusOnSelect={true}
        images={sliderImages}
        swipeToSlide={true}
      />
    </section>
  );
};

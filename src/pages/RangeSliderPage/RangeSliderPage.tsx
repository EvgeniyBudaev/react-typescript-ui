import { type FC, useState } from "react";
import { Title } from "components";
import { RangeSlider } from "uikit/components/RangeSlider";
import "./RangeSliderPage.scss";

export const RangeSliderPage: FC = () => {
  const [range, setRange] = useState<any>([18, 50]);

  return (
    <section className="RangeSliderPage">
      <Title>Range slider with tooltip</Title>
      <RangeSlider
        classes={{ root: "RangeSliderPage-Slider" }}
        isShowTooltip={true}
        label="Range"
        max={100}
        min={0}
        onChange={setRange}
        step={1}
        value={range}
      />
    </section>
  );
};

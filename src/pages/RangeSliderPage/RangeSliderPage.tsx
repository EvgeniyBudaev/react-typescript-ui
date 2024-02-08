import { type FC, useState } from "react";
import { Hr, Title } from "components";
import { RangeSlider } from "uikit/components/RangeSlider";
import "./RangeSliderPage.scss";

export const RangeSliderPage: FC = () => {
  const [range, setRange] = useState<any>([18, 50]);

  return (
    <section className="RangeSliderPage">
      <Title>Range slider</Title>
      <Hr />
      <RangeSlider
        // isShowRangeValue={true}
        isShowTooltip={true}
        label="Range"
        maxValue={100}
        minValue={18}
        onChange={setRange}
        step={1}
        value={range}
      />
    </section>
  );
};

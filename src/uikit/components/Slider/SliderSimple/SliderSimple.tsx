import { memo } from "react";
import type { FC } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";
import isNil from "lodash/isNil";
import { SLIDER_SIMPLE_SETTINGS } from "uikit/index";
import type { TSliderSimpleProps } from "uikit/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderSimple.scss";
import "../Slider.scss";

const SliderSimpleComponent: FC<TSliderSimpleProps> = (props) => {
  const { alt = "", height, images, width } = props;

  const settings = SLIDER_SIMPLE_SETTINGS(props).settings;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 100px)" });

  return (
    <Slider {...settings}>
      {!isNil(images) &&
        images.map((image, index) => {
          return (
            <div className="SliderSimple-Item" key={index}>
              <img
                alt={alt}
                className={clsx("SliderSimple-Image", {
                  "SliderSimple-Image__mobile": isMobileScreen,
                })}
                height={height}
                src={image}
                width={width}
              />
            </div>
          );
        })}
    </Slider>
  );
};

export const SliderSimple = memo(SliderSimpleComponent);

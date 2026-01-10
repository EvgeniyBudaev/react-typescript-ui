import clsx from "clsx";
import { memo, useEffect, useRef, type FC } from "react";

import { Icon } from "uikit";

import { ESliderArrow } from "./enums";
import type { TSliderArrowProps } from "./types";

const SliderArrowComponent: FC<TSliderArrowProps> = ({
  backgroundColor = "#e8e8e8",
  className,
  dataTestId = "uikit__slider-arrow",
  onClick,
  opacity = 1,
  style,
  styles,
  type,
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.style.setProperty("--slider-arrow-backgroundColor", backgroundColor);
      arrowRef.current.style.setProperty("--slider-arrow-opacity", opacity.toString());
    }
  }, [backgroundColor, opacity]);

  return (
    <div
      className={clsx("Slider-Arrow", className)}
      data-testid={dataTestId}
      ref={arrowRef}
      style={{ ...style, ...styles }}
      onClick={onClick}
    >
      <div
        className={clsx("Slider-ArrowButton", {
          "Slider-ArrowButton__left": type === ESliderArrow.Previous,
          "Slider-ArrowButton__right": type === ESliderArrow.Next,
        })}
      >
        <Icon
          className="Slider-ArrowCustom"
          type={type === ESliderArrow.Previous ? "ArrowLeft" : "ArrowRight"}
        />
      </div>
    </div>
  );
};

SliderArrowComponent.displayName = "SliderArrow";

export const SliderArrow = memo(SliderArrowComponent);

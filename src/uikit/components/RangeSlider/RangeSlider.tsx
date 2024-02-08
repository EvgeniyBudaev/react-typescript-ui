"use client";

import clsx from "clsx";
import {
  type Dispatch,
  type FC,
  memo,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import "./RangeSlider.scss";

type TClasses = {
  root?: string;
};

type TProps = {
  classes?: TClasses;
  isShowRangeValue?: boolean;
  isShowTooltip?: boolean;
  label: string;
  maxValue: number;
  minValue: number;
  onChange?: Dispatch<SetStateAction<number[]>>;
  step: number;
  value: number[];
};

const RangeSliderComponent: FC<TProps> = ({
  classes,
  isShowRangeValue = false,
  isShowTooltip = false,
  label,
  maxValue,
  minValue,
  onChange,
  step,
  value,
}) => {
  const [min, setMin] = useState(value[0]);
  const [max, setMax] = useState(value[1]);
  const [minTooltip, setMinTooltip] = useState(value[0]);
  const [maxTooltip, setMaxTooltip] = useState(value[1]);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const minInputRef = useRef<HTMLInputElement | null>(null);
  const maxInputRef = useRef<HTMLInputElement | null>(null);
  const minTooltipRef = useRef<HTMLDivElement | null>(null);
  const maxTooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      trackRef &&
      trackRef.current &&
      minTooltipRef &&
      minTooltipRef.current &&
      maxTooltipRef &&
      maxTooltipRef.current
    ) {
      const minLeft = `${((min - minValue) / (maxValue - minValue)) * 100}%`;
      const maxRight = `${((maxValue - max) / (maxValue - minValue)) * 100}%`;
      trackRef.current.style.left = minLeft;
      trackRef.current.style.right = maxRight;
      minTooltipRef.current.style.left = minLeft;
      maxTooltipRef.current.style.right = maxRight;
    }
  }, [max, maxValue, min, minValue]);

  const handleChangeMin = (event?: any) => {
    if (minInputRef && minInputRef.current && maxInputRef && maxInputRef.current) {
      minInputRef.current.style.zIndex = "10";
      maxInputRef.current.style.zIndex = "5";
    }
    if (minTooltipRef && minTooltipRef.current && maxTooltipRef && maxTooltipRef.current) {
      minTooltipRef.current.style.zIndex = "10";
      maxTooltipRef.current.style.zIndex = "5";
    }
    const value = Number(event.target.value);
    if (value <= max) {
      setMin(value);
      setMinTooltip(value);
      if (onChange) {
        onChange?.([value, max]);
      }
    }
  };

  const handleChangeMax = (event?: any) => {
    if (minInputRef && minInputRef.current && maxInputRef && maxInputRef.current) {
      minInputRef.current.style.zIndex = "5";
      maxInputRef.current.style.zIndex = "10";
    }
    if (minTooltipRef && minTooltipRef.current && maxTooltipRef && maxTooltipRef.current) {
      minTooltipRef.current.style.zIndex = "5";
      maxTooltipRef.current.style.zIndex = "10";
    }
    const value = Number(event.target.value);
    if (value >= min) {
      setMax(value);
      setMaxTooltip(value);
      onChange?.([min, value]);
    }
  };

  return (
    <div className={clsx("RangeSlider", classes?.root)}>
      {isShowRangeValue && (
        <div className="RangeSlider-Info">
          <div className="RangeSlider-Title">{label}</div>
          <div className="RangeSlider-NumberList">
            <div>{Array.isArray(value) && value?.[0]}</div>
            &nbsp;-&nbsp;
            <div>{Array.isArray(value) && value?.[1]}</div>
          </div>
        </div>
      )}
      <div className="RangeSlider-Slider">
        <div className="RangeSlider-Slider-Track" ref={trackRef}></div>
        <input
          className="RangeSlider-Slider-Input RangeSlider-Slider-Input-Min"
          max={maxValue}
          min={minValue}
          name="min"
          onChange={handleChangeMin}
          ref={minInputRef}
          step={step}
          type="range"
          value={min}
        />
        <input
          className="RangeSlider-Slider-Input RangeSlider-Slider-Input-Max"
          max={maxValue}
          min={minValue}
          name="max"
          onChange={handleChangeMax}
          ref={maxInputRef}
          step={step}
          type="range"
          value={max}
        />
        {isShowTooltip && (
          <>
            <div
              className="RangeSlider-Slider-Tooltip RangeSlider-Slider-Tooltip-Min"
              ref={minTooltipRef}
            >
              {minTooltip}
            </div>
            <div
              className="RangeSlider-Slider-Tooltip RangeSlider-Slider-Tooltip-Max"
              ref={maxTooltipRef}
            >
              {maxTooltip}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const RangeSlider = memo(RangeSliderComponent);

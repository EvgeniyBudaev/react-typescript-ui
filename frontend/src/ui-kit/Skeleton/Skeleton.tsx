import React, { CSSProperties, useEffect, useRef } from "react";
import classNames from "classnames";
import "./Skeleton.scss";

export interface ISkeletonProps {
  className?: string;
  height?: string | number;
  style?: CSSProperties;
  width?: string | number;
  isCircle?: boolean;
}

export const Skeleton: React.FC<ISkeletonProps> = ({
  className,
  height = "100%",
  style,
  width = "100%",
  isCircle,
}) => {
  const ref = useRef(null);

  const setAtToStringAndPx = (value: string | number): string => {
    if (typeof value === "string") {
      return value;
    } else {
      return value.toString() + "px";
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty(
        "--skeleton-width",
        setAtToStringAndPx(width)
      );
      ref.current.style.setProperty(
        "--skeleton-height",
        setAtToStringAndPx(height)
      );
    }
  }, [height, width]);

  return (
    <div
      className={classNames("Skeleton", className, {
        Skeleton__circle: isCircle,
      })}
      ref={ref}
      style={style}
    />
  );
};

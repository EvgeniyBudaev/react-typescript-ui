import React, { CSSProperties, memo, useEffect, useRef } from "react";
import classNames from "classnames";
import { setAtToStringAndPx } from "utils/string";
import "./Skeleton.scss";

export interface ISkeletonProps {
  className?: string;
  height?: string | number;
  style?: CSSProperties;
  width?: string | number;
  isCircle?: boolean;
}

const SkeletonComponent: React.FC<ISkeletonProps> = ({
  className,
  height = "100%",
  style,
  width = "100%",
  isCircle,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      height &&
        ref.current.style.setProperty(
          "--skeleton-height",
          setAtToStringAndPx(height)
        );
      width &&
        ref.current.style.setProperty(
          "--skeleton-width",
          setAtToStringAndPx(width)
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

export const Skeleton = memo(SkeletonComponent);

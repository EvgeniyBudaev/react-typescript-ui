import clsx from "clsx";
import { memo, useEffect, useRef, type FC } from "react";

import { formatToStringWithPx } from "../../utils";
import type { TSkeletonProps } from "./types";
import "./Skeleton.scss";

const SkeletonComponent: FC<TSkeletonProps> = ({
  className,
  dataTestId = "uikit__skeleton",
  height = "100%",
  style,
  width = "100%",
  isCircle,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      height && ref.current.style.setProperty("--skeleton-height", formatToStringWithPx(height));
      width && ref.current.style.setProperty("--skeleton-width", formatToStringWithPx(width));
    }
  }, [height, width]);

  return (
    <div
      className={clsx("Skeleton", className, {
        Skeleton__circle: isCircle,
      })}
      data-testid={dataTestId}
      ref={ref}
      style={style}
    />
  );
};

SkeletonComponent.displayName = "Skeleton";

export const Skeleton = memo(SkeletonComponent);

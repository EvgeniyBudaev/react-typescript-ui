import { CSSProperties, memo, useEffect, useRef } from "react";
import type { FC } from "react";
import clsx from "clsx";
import { formatToStringWithPx } from "../utils";
import "./Skeleton.scss";

type TProps = {
  className?: string;
  height?: string | number;
  style?: CSSProperties;
  width?: string | number;
  isCircle?: boolean;
};

const Component: FC<TProps> = ({ className, height = "100%", style, width = "100%", isCircle }) => {
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
      ref={ref}
      style={style}
    />
  );
};

export const Skeleton = memo(Component);

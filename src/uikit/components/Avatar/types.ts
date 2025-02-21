import type { MouseEvent } from "react";

export type TAvatarProps = {
  className?: string;
  classNameSmallCircle?: string;
  dataTestId?: string;
  image?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  size?: number;
  title?: string;
};

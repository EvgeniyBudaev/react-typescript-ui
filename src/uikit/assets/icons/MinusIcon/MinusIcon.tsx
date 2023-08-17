import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

const Component: FC<TIconProps> = ({ height = 24, width = 24, ...props }) => (
  <svg
    height={height}
    width={width}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 455 455"
    enableBackground="new 0 0 455 455"
    {...props}
  >
    <rect y="212.5" width="455" height="30" />
  </svg>
);

export const MinusIcon = memo(Component);

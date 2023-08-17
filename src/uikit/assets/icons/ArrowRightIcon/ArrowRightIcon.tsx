import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

const Component: FC<TIconProps> = ({ height = 16, width = 8, ...props }) => (
  <svg
    fill="currentColor"
    height={height}
    width={width}
    viewBox="0 0 8 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 14.5697L1.21337 16L8 8L1.21337 0L0 1.4303L5.57326 8L0 14.5697Z" />
  </svg>
);

export const ArrowRightIcon = memo(Component);

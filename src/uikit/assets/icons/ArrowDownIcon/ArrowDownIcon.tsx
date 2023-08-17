import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

const Component: FC<TIconProps> = ({ height = 8, width = 16, ...props }) => (
  <svg
    fill="currentColor"
    height={height}
    width={width}
    viewBox="0 0 16 8"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.4303 0L0 1.21337L8 8L16 1.21337L14.5697 0L8 5.57326L1.4303 0Z" />
  </svg>
);

export const ArrowDownIcon = memo(Component);

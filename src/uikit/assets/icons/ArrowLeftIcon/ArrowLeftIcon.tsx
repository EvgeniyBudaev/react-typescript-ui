import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

const Component: FC<TIconProps> = ({ className, height = 16, width = 8, onClick, ...props }) => (
  <svg
    className={className}
    fill="currentColor"
    height={height}
    width={width}
    viewBox="0 0 8 16"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    {...props}
  >
    <path d="M8 1.4303L6.78663 0L0 8L6.78663 16L8 14.5697L2.42674 8L8 1.4303Z" />
  </svg>
);

export const ArrowLeftIcon = memo(Component);

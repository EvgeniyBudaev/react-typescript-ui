import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

const IconComponent: FC<TIconProps> = ({ height = 24, width = 24, ...props }) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.859985" width="24" height="24" rx="4" fill="#2197CC" />
      <path
        d="M11.7408 5L5.85999 19H7.77278L9.29894 15.26H16.2786L17.8658 19H19.86L13.9181 5H11.7408ZM12.7582 6.86L15.6071 13.66H9.97045L12.7582 6.86Z"
        fill="white"
      />
    </svg>
  );
};

export const HighlightIcon = memo(IconComponent);

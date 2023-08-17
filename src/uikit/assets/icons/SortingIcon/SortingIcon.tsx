import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

const IconComponent: FC<TIconProps> = ({ height = 24, width = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    transform="rotate(90)"
    viewBox="0 96 960 960"
    {...props}
  >
    <path d="M271 936 80 745l192-192 42 42-120 120h649v60H194l119 119-42 42Zm418-337-42-42 119-119H117v-60h649L646 258l42-42 192 192-191 191Z" />
  </svg>
);

export const SortingIcon = memo(IconComponent);

import { memo } from "react";

import type { TIconProps } from "../types";

const Component: FC<TIconProps> = ({ height = 24, width = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 -960 960 960"
    width={width}
    fill="currentColor"
    {...props}
  >
    <path d="M440-80v-160H240L120-360l120-120h200v-80H160v-240h280v-80h80v80h200l120 120-120 120H520v80h280v240H520v160h-80ZM240-640h447l40-40-40-40H240v80Zm33 320h447v-80H273l-40 40 40 40Zm-33-320v-80 80Zm480 320v-80 80Z" />
  </svg>
);

export const SignpostIcon = memo(Component);

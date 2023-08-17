import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

const Component: FC<TIconProps> = ({ height = 24, width = 24, ...props }) => (
  <svg
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2.5 -2.5 19 19"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.586 7L.707 2.121A1 1 0 012.121.707l4.88 4.88 4.878-4.88a1 1 0 011.415 1.414l-4.88 4.88 4.88 4.878a1 1 0 01-1.415 1.415L7 8.414l-4.879 4.88a1 1 0 11-1.414-1.415L5.587 7z"
    ></path>
  </svg>
);

export const CloseIcon = memo(Component);

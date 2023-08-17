import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

const IconComponent: FC<TIconProps> = ({ height = 24, width = 24, ...props }) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.11999 14C10.46 14 12.58 12.82 12.58 9.92C12.58 8.1 11.82 7.06 10.24 6.7C11.6 6.06 12.16 5.06 12.16 3.58C12.16 1.32 10.64 0 7.17999 0H0.859985V14H7.11999ZM4.05999 11V8.14H7.19999C8.77999 8.14 9.35999 8.66 9.35999 9.54C9.35999 10.5 8.79999 11 7.19999 11H4.05999ZM4.05999 5.66V3H6.99999C8.39999 3 8.95999 3.48 8.95999 4.28C8.95999 5.1 8.33998 5.66 6.91998 5.66H4.05999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const BoldIcon = memo(IconComponent);

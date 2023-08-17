import { memo } from "react";
import type { FC } from "react";
import type { TIconProps } from "../types";

const IconComponent: FC<TIconProps> = ({ height = 24, width = 24, ...props }) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.55999 0H2.75999V8.42C2.75999 12.16 5.01998 14.2 8.75998 14.2C12.06 14.2 14.68 12.6 14.68 8.26V0H12.88V8.34C12.88 11.78 11.04 12.6 8.95999 12.6C6.69999 12.6 4.55999 11.62 4.55999 8.1V0Z"
        fill="currentColor"
      />
      <path d="M0.859985 16.18H16.58V17.18H0.859985V16.18Z" fill="currentColor" />
    </svg>
  );
};

export const UnderlineIcon = memo(IconComponent);

import { memo } from "react";
import type { FC, MouseEvent } from "react";
import type { TIconProps } from "../types";

type TProps = TIconProps & {
  className?: string;
  onClick?: (event: MouseEvent<HTMLOrSVGElement>) => void;
};

const Component: FC<TProps> = ({ className, height = 24, width = 24, onClick, ...props }) => (
  <svg
    className={className}
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2.5 -2.5 19 19"
    data-tid="81c11660"
    onClick={onClick}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.586 7L.707 2.121A1 1 0 012.121.707l4.88 4.88 4.878-4.88a1 1 0 011.415 1.414l-4.88 4.88 4.88 4.878a1 1 0 01-1.415 1.415L7 8.414l-4.879 4.88a1 1 0 11-1.414-1.415L5.587 7z"
    ></path>
  </svg>
);

export const CloseIcon = memo(Component);

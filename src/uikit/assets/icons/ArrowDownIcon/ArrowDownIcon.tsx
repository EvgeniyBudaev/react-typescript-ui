import { memo } from "react";
import type { FC, MouseEvent } from "react";
import type { TIconProps } from "../types";

type TProps = TIconProps & {
  className?: string;
  onClick?: (event: MouseEvent<HTMLOrSVGElement>) => void;
};

const Component: FC<TProps> = ({ className, onClick, ...props }) => (
  <svg
    className={className}
    width="16"
    height="8"
    viewBox="0 0 16 8"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    {...props}
  >
    <path d="M1.4303 0L0 1.21337L8 8L16 1.21337L14.5697 0L8 5.57326L1.4303 0Z" />
  </svg>
);

export const ArrowDownIcon = memo(Component);

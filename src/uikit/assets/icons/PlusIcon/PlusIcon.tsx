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
    height="24px"
    width="24px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 455 455"
    enableBackground="new 0 0 455 455"
    onClick={onClick}
    {...props}
  >
    <polygon
      points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5
	455,242.5 "
    />
  </svg>
);

export const PlusIcon = memo(Component);

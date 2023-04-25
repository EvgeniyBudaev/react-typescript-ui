import { memo } from "react";
import type { FC, MouseEvent } from "react";
import type { TIconProps } from "../types";

type TProps = TIconProps & {
  className?: string;
  onClick?: (e: MouseEvent<HTMLOrSVGElement>) => void;
};

const IconComponent: FC<TProps> = ({ className, onClick, ...props }) => (
  <svg
    className={className}
    height="24"
    width="24"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <polyline
      fill="none"
      points="144 168 184 208 224 168"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      x1="184"
      x2="184"
      y1="112"
      y2="208"
    />
    <line
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      x1="48"
      x2="120"
      y1="128"
      y2="128"
    />
    <line
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      x1="48"
      x2="184"
      y1="64"
      y2="64"
    />
    <line
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      x1="48"
      x2="104"
      y1="192"
      y2="192"
    />
  </svg>
);

export const SortDownIcon = memo(IconComponent);

import React from "react";
import classNames from "classnames";
import { SortingType } from "../Table";
import "./SortingIcon.scss";

export interface ISortingIconProps {
  className?: string;
  sort?: SortingType;
  sortVariant?: string;
}

export const SortingIcon: React.FC<ISortingIconProps> = ({
  className,
  sort,
  sortVariant,
}) => {
  return (
    <div className={classNames("SortingIcon", className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        height="16px"
        width="16px"
      >
        <polygon
          fill={sort === sortVariant ? "#000" : "none"}
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          points="16,5 24,13 8,13 "
        />
        <polygon
          fill={sort === `-${sortVariant}` ? "#000" : "none"}
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          points="16,27 8,19 24,19 "
        />
      </svg>
    </div>
  );
};

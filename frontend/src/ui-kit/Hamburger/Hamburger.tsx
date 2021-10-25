import React from "react";
import classNames from "classnames";
import "./Hamburger.scss";

enum HamburgerColor {
  BLACK = "black",
  WHITE = "white",
}

type HamburgerColorType = "black" | "white";

export interface IHamburgerProps {
  className?: string;
  color?: HamburgerColorType;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const Hamburger: React.FC<IHamburgerProps> = ({
  className,
  color = HamburgerColor.BLACK,
  isActive = false,
  onClick,
}) => {
  return (
    <div className={classNames("Hamburger", className)} onClick={onClick}>
      <div
        className={classNames("Burger", {
          Burger__black: color === HamburgerColor.BLACK,
          Burger__white: color === HamburgerColor.WHITE,
          Burger__active: isActive,
        })}
      />
    </div>
  );
};

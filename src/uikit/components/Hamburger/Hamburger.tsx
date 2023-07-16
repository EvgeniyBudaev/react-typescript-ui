import { memo } from "react";
import type { FC, MouseEvent } from "react";
import classNames from "classnames";
import "./Hamburger.scss";

enum EColor {
  BLACK = "black",
  WHITE = "white",
}

type TColor = "black" | "white";

type TProps = {
  className?: string;
  color?: TColor;
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
};

const Component: FC<TProps> = ({ className, color = EColor.BLACK, isActive = false, onClick }) => {
  return (
    <div className={classNames("Hamburger", className)} onClick={onClick}>
      <div
        className={classNames("Burger", {
          Burger__black: color === EColor.BLACK,
          Burger__white: color === EColor.WHITE,
          Burger__active: isActive,
        })}
      />
    </div>
  );
};

export const Hamburger = memo(Component);

import clsx from "clsx";
import { memo } from "react";
import type { FC, MouseEvent } from "react";
import "./Hamburger.scss";

enum EColor {
  BLACK = "black",
  WHITE = "white",
}

type TColor = "black" | "white";

type TProps = {
  className?: string;
  color?: TColor;
  dataTestId?: string;
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
};

const HamburgerComponent: FC<TProps> = ({
  className,
  color = EColor.BLACK,
  dataTestId = "uikit__hamburger",
  isActive = false,
  onClick,
}) => {
  return (
    <div className={clsx("Hamburger", className)} data-testid={dataTestId} onClick={onClick}>
      <div
        className={clsx("Burger", {
          Burger__black: color === EColor.BLACK,
          Burger__white: color === EColor.WHITE,
          Burger__active: isActive,
        })}
      />
    </div>
  );
};

export const Hamburger = memo(HamburgerComponent);

import clsx from "clsx";
import { memo } from "react";

import { EHamburgerColor } from "./enums";
import type { THamburgerProps } from "./types";
import "./Hamburger.scss";

const HamburgerComponent: FC<THamburgerProps> = ({
  className,
  color = EHamburgerColor.BLACK,
  dataTestId = "uikit__hamburger",
  isActive = false,
  onClick,
}) => {
  return (
    <div className={clsx("Hamburger", className)} data-testid={dataTestId} onClick={onClick}>
      <div
        className={clsx("Burger", {
          Burger__black: color === EHamburgerColor.BLACK,
          Burger__white: color === EHamburgerColor.WHITE,
          Burger__active: isActive,
        })}
      />
    </div>
  );
};

HamburgerComponent.displayName = "Hamburger";

export const Hamburger = memo(HamburgerComponent);

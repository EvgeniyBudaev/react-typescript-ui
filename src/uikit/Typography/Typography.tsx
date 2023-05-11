import { createElement, memo } from "react";
import type { FC, ReactNode } from "react";

import { ETextColor, ETypographyVariant } from "uikit";
import { TYPOGRAPHY_THEMES } from "uikit/Typography/constants";
import type { TColor } from "./types";
import "./Typography.scss";

type TProps = {
  as?: string;
  children?: ReactNode;
  color?: TColor;
  htmlFor?: string;
  variant?: ETypographyVariant;
};

const Component: FC<TProps> = ({
  as = "span",
  children,
  color = ETextColor.Dark,
  htmlFor,
  variant = ETypographyVariant.TextH1Bold,
}) => {
  const currentTheme = TYPOGRAPHY_THEMES({ color })[variant];

  const props = {
    className: currentTheme,
    ...(as === "label" && htmlFor && { htmlFor }),
  };

  return createElement(as, props, children);
};

export const Typography = memo(Component);

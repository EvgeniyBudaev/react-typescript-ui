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
  variant?: ETypographyVariant;
};

const Component: FC<TProps> = ({
  as = "span",
  children,
  color = ETextColor.Dark,
  variant = ETypographyVariant.TextH1Bold,
}) => {
  const currentTheme = TYPOGRAPHY_THEMES({ color })[variant];

  return createElement(
    as,
    {
      className: currentTheme,
    },
    children,
  );
};

export const Typography = memo(Component);

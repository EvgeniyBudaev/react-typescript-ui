import { createElement, memo, type FC } from "react";

import { ETextColor, ETypographyVariant } from "uikit";
import { TYPOGRAPHY_THEMES } from "uikit/components/Typography/constants";

import type { TTypographyProps } from "./types";
import "./Typography.scss";

const TypographyComponent: FC<TTypographyProps> = ({
  as = "span",
  children,
  color = ETextColor.Dark,
  dataTestId = "uikit__typography",
  htmlFor,
  variant = ETypographyVariant.TextH1Bold,
}) => {
  const currentTheme = TYPOGRAPHY_THEMES({ color })[variant];

  const props = {
    className: currentTheme,
    "data-testid": dataTestId,
    ...(as === "label" && htmlFor && { htmlFor }),
  };

  return createElement(as, props, children);
};

TypographyComponent.displayName = "Typography";

export const Typography = memo(TypographyComponent);

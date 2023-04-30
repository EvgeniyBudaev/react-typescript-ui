import clsx from "clsx";
import { EColorType, ETypographyVariant } from "uikit";
import type { TColor } from "./types";

type TThemesOptions = {
  color: TColor;
};

export const TYPOGRAPHY_THEMES = (options: TThemesOptions) => {
  const mainStyles = clsx(`${EColorType.Text}-${options?.color}`);

  return {
    [ETypographyVariant.TextH1Bold]: clsx(
      "Typography-text-h1 Typography-text-h1__bold",
      mainStyles,
    ),
    [ETypographyVariant.TextH1Medium]: clsx(
      "Typography-text-h1 Typography-text-h1__medium",
      mainStyles,
    ),
    [ETypographyVariant.TextH2Medium]: clsx(
      "Typography-text-h2 Typography-text-h2__medium",
      mainStyles,
    ),
    [ETypographyVariant.TextH3Medium]: clsx(
      "Typography-text-h3 Typography-text-h3__medium",
      mainStyles,
    ),
    [ETypographyVariant.TextH4Medium]: clsx(
      "Typography-text-h4 Typography-text-h4__medium",
      mainStyles,
    ),
    [ETypographyVariant.TextH5Medium]: clsx(
      "Typography-text-h5 Typography-text-h5__medium",
      mainStyles,
    ),
    [ETypographyVariant.TextH5Bold]: clsx(
      "Typography-text-h5 Typography-text-h5__bold",
      mainStyles,
    ),
    [ETypographyVariant.TextH6Bold]: clsx(
      "Typography-text-h6 Typography-text-h6__bold",
      mainStyles,
    ),
    [ETypographyVariant.TextB2Bold]: clsx(
      "Typography-text-b2 Typography-text-b2__bold",
      mainStyles,
    ),
    [ETypographyVariant.TextB2Medium]: clsx(
      "Typography-text-b2 Typography-text-b2__medium",
      mainStyles,
    ),
    [ETypographyVariant.TextB2Regular]: clsx(
      "Typography-text-b2 Typography-text-b2__regular",
      mainStyles,
    ),
    [ETypographyVariant.TextB3Bold]: clsx(
      "Typography-text-b3 Typography-text-b3__bold",
      mainStyles,
    ),
    [ETypographyVariant.TextB3Medium]: clsx(
      "Typography-text-b3 Typography-text-b3__medium",
      mainStyles,
    ),
    [ETypographyVariant.TextB3Regular]: clsx(
      "Typography-text-b3 Typography-text-b3__regular",
      mainStyles,
    ),
    [ETypographyVariant.TextB4Bold]: clsx(
      "Typography-text-b4 Typography-text-b4__bold",
      mainStyles,
    ),
    [ETypographyVariant.TextB4Medium]: clsx(
      "Typography-text-b4 Typography-text-b4__medium",
      mainStyles,
    ),
    [ETypographyVariant.TextB4Regular]: clsx(
      "Typography-text-b4 Typography-text-b4__regular",
      mainStyles,
    ),
  };
};

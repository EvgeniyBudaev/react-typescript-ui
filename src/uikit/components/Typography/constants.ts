import clsx from "clsx";
import { EColorType, ETypographyVariant } from "uikit/index";
import type { TColor } from "./types";

type TThemesOptions = {
  color: TColor;
};

export const TYPOGRAPHY_THEMES = (options: TThemesOptions) => {
  const mainStyles = clsx(`${EColorType.Text}-${options?.color}`);

  return {
    [ETypographyVariant.TextH1Bold]: clsx("Typography text-h1 text-bold", mainStyles),
    [ETypographyVariant.TextH1Medium]: clsx("Typography text-h1 text-medium", mainStyles),
    [ETypographyVariant.TextH2Bold]: clsx("Typography text-h2 text-bold", mainStyles),
    [ETypographyVariant.TextH2Medium]: clsx("Typography text-h2 text-medium", mainStyles),
    [ETypographyVariant.TextH3Medium]: clsx("Typography text-h3 text-medium", mainStyles),
    [ETypographyVariant.TextH4Medium]: clsx("Typography text-h4 text-medium", mainStyles),
    [ETypographyVariant.TextH5Medium]: clsx("Typography text-h5 text-medium", mainStyles),
    [ETypographyVariant.TextH5Bold]: clsx("Typography text-h5 text-bold", mainStyles),
    [ETypographyVariant.TextH6Bold]: clsx("Typography text-h6 text-bold", mainStyles),
    [ETypographyVariant.TextB2Bold]: clsx("Typography text-b2 text-bold", mainStyles),
    [ETypographyVariant.TextB2Medium]: clsx("Typography text-b2 text-medium", mainStyles),
    [ETypographyVariant.TextB2Regular]: clsx("Typography text-b2 text-regular", mainStyles),
    [ETypographyVariant.TextB3Bold]: clsx("Typography text-b3 text-bold", mainStyles),
    [ETypographyVariant.TextB3Medium]: clsx("Typography text-b3 text-medium", mainStyles),
    [ETypographyVariant.TextB3Regular]: clsx("Typography text-b3 text-regular", mainStyles),
    [ETypographyVariant.TextB4Bold]: clsx("Typography text-b4 text-bold", mainStyles),
    [ETypographyVariant.TextB4Medium]: clsx("Typography text-b4 text-medium", mainStyles),
    [ETypographyVariant.TextB4Regular]: clsx("Typography text-b4 text-regular", mainStyles),
  };
};

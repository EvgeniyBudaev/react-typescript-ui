import type * as React from "react";
import type { EErrorTheme } from "./enums";

export type TError = {
  id?: string;
  title: React.ReactNode | React.ReactNode[];
};

export type TErrorTheme = `${EErrorTheme}`;

export type TErrorProps = JSX.IntrinsicElements["div"] & {
  dataTestId?: string;
  errors?: TError[];
  theme?: TErrorTheme;
};

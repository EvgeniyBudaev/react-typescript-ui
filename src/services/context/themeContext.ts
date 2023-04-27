import { createContext } from "react";
import type { ETheme } from "uikit";

export type TThemeState = {
  onChangeTheme: (theme: ETheme) => void;
  theme: ETheme;
};
export const ThemeContext = createContext<TThemeState | null>(null);
export const ThemeProvider = ThemeContext.Provider;

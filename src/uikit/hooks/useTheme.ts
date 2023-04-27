import { useContext, useMemo, useState } from "react";
import { ThemeContext } from "services/context";
import type { TThemeState } from "services/context";
import { ETheme } from "uikit";

export const useThemeContext = (): TThemeState | null => {
  return useContext(ThemeContext);
};

export const useTheme = () => {
  const [theme, setTheme] = useState(ETheme.Light);

  const handleChangeTheme = (theme: ETheme) => {
    setTheme(theme);
  };

  return useMemo(() => {
    return {
      theme,
      onChangeTheme: handleChangeTheme,
    };
  }, [theme, setTheme]);
};

import type { FC } from "react";
import clsx from "clsx";
import isNil from "lodash/isNil";
import { ESwitcherVariant, ETheme, IconButton, Switcher, useThemeContext } from "uikit";
import { SWITCHER_THEMES } from "./constants";

type TProps = {
  className?: string;
  variant?: ESwitcherVariant;
};

export const ThemeSwitcher: FC<TProps> = ({ className, variant = ESwitcherVariant.Default }) => {
  const currentTheme = SWITCHER_THEMES()[variant];
  const themeState = useThemeContext();
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light;
  const isLight = theme !== ETheme.Dark;

  const handleClick = (theme: ETheme) => () => {
    themeState?.onChangeTheme(theme);
  };

  const handleSwitchToDark = handleClick(ETheme.Dark);
  const handleSwitchToLight = handleClick(ETheme.Light);

  return (
    <Switcher className={clsx(currentTheme, className)} isChecked={isLight} variant={variant}>
      <IconButton
        className={clsx("ThemeSwitcher-Switcher-DisplayButton", {
          "ThemeSwitcher-Switcher-DisplayButton__checked": isLight,
        })}
        typeIcon="LightMode"
        onClick={handleSwitchToLight}
      />
      <IconButton
        className={clsx("ThemeSwitcher-Switcher-DisplayButton", {
          "ThemeSwitcher-Switcher-DisplayButton__checked": !isLight,
        })}
        typeIcon="DarkMode"
        onClick={handleSwitchToDark}
      />
    </Switcher>
  );
};

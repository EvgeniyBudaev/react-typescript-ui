import type { FC } from "react";
import clsx from "clsx";
import isNil from "lodash/isNil";
import { ESwitcherVariant, ETheme, Icon, SwitcherHeadless, useThemeContext } from "uikit";
import { SWITCHER_THEMES } from "../constants";

type TProps = {
  className?: string;
  variant?: ESwitcherVariant;
};

export const ThemeSwitcher: FC<TProps> = ({ className, variant = ESwitcherVariant.Default }) => {
  const currentTheme = SWITCHER_THEMES()[variant];
  const themeState = useThemeContext();
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light;
  const isLight = theme !== ETheme.Dark;

  const handleChange = (isChecked: boolean) => {
    isChecked ? handleSwitchToLight() : handleSwitchToDark();
  };

  const handleClick = (theme: ETheme) => () => {
    themeState?.onChangeTheme(theme);
  };

  const handleSwitchToDark = handleClick(ETheme.Dark);
  const handleSwitchToLight = handleClick(ETheme.Light);

  return (
    <SwitcherHeadless
      className={clsx(currentTheme, className)}
      isChecked={isLight}
      onChange={handleChange}
      variant={variant}
    >
      <div className="ThemeSwitcher-Controls">
        <Icon
          className={clsx("ThemeSwitcher-DisplayButton", {
            "ThemeSwitcher-DisplayButton__checked": isLight,
          })}
          type="LightMode"
        />
        <Icon
          className={clsx("ThemeSwitcher-DisplayButton", {
            "ThemeSwitcher-DisplayButton__checked": !isLight,
          })}
          type="DarkMode"
        />
      </div>
    </SwitcherHeadless>
  );
};

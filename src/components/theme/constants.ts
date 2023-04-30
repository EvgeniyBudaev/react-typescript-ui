import clsx from "clsx";
import { ESwitcherVariant } from "uikit";
import "./ThemeSwitcher.scss";

export const SWITCHER_THEMES = () => {
  return {
    [ESwitcherVariant.Default]: clsx("ThemeSwitcher"),
  };
};

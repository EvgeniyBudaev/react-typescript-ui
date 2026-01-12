import { useEffect } from "react";
import clsx from "clsx";
import isNil from "lodash/isNil";

import { ETheme, useThemeContext } from "uikit";

import { MenuPanel } from "./MenuPanel";
import "./Layout.scss";

export const Layout: FCC = ({ children }) => {
  const themeState = useThemeContext();
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light;

  useEffect(() => {
    if (theme === ETheme.Dark) {
      document.body.classList.add("theme-dark");
    }
    return () => {
      document.body.classList.remove("theme-dark");
    };
  }, [theme]);

  return (
    <div className={clsx("Layout", { "theme-dark": theme === ETheme.Dark })}>
      <MenuPanel />
      <div className="Layout-Container">{children}</div>
    </div>
  );
};

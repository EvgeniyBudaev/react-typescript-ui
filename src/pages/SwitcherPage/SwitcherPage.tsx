import type { FC } from "react";
import { ThemeSwitcher, ThemeSwitcherWithSwitcherCustom } from "components";
import "./SwitcherPage.scss";

export const SwitcherPage: FC = () => {
  return (
    <section className="SwitcherPage">
      <h2>Switcher</h2>
      <ThemeSwitcher />
      <hr />
      <h2>Switcher Custom</h2>
      <ThemeSwitcherWithSwitcherCustom />
    </section>
  );
};

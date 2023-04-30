import type { FC } from "react";
import { ThemeSwitcher, ThemeSwitcherCustom } from "components";
import "./SwitcherPage.scss";

export const SwitcherPage: FC = () => {
  return (
    <section className="SwitcherPage">
      <h2>Switcher</h2>
      <ThemeSwitcher />
      <hr />
      <h2>Switcher Custom</h2>
      <ThemeSwitcherCustom />
    </section>
  );
};

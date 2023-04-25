import type { FC } from "react";
import { ThemeSwitcher } from "components";
import "./SwitcherPage.scss";

export const SwitcherPage: FC = () => {
  return (
    <section className="SwitcherPage">
      <h2>Switcher</h2>
      <ThemeSwitcher />
    </section>
  );
};

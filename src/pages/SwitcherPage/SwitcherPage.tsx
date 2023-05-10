import React from "react";
import type { FC } from "react";
import { Hr, ThemeSwitcher, ThemeSwitcherCustom, Title } from "components";

export const SwitcherPage: FC = () => {
  return (
    <section className="SwitcherPage">
      <Title>Switcher</Title>
      <ThemeSwitcher />
      <Hr />
      <Title>Switcher Custom</Title>
      <ThemeSwitcherCustom />
    </section>
  );
};

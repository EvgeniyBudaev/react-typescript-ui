import type { FC } from "react";
import { ThemeSwitcher, ThemeSwitcherCustom } from "components";
import { ETypographyVariant, Typography } from "uikit";
import "./SwitcherPage.scss";

export const SwitcherPage: FC = () => {
  return (
    <section className="SwitcherPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Switcher</Typography>
      <ThemeSwitcher />
      <hr />
      <Typography variant={ETypographyVariant.TextH1Medium}>Switcher Custom</Typography>
      <ThemeSwitcherCustom />
    </section>
  );
};

import type { FC } from "react";
import { ETypographyVariant, Typography } from "uikit";
import "./TypographyPage.scss";

export const TypographyPage: FC = () => {
  return (
    <section className="TypographyPage">
      <h2>Typography</h2>

      <hr />
      <Typography variant={ETypographyVariant.TextH1Bold}>Title</Typography>
    </section>
  );
};

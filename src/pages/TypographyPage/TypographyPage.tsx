import type { FC } from "react";
import { ETypographyVariant, Typography } from "uikit";
import "./TypographyPage.scss";

export const TypographyPage: FC = () => {
  return (
    <section className="TypographyPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Typography</Typography>

      <hr />
      <Typography variant={ETypographyVariant.TextH1Bold}>Title</Typography>
    </section>
  );
};

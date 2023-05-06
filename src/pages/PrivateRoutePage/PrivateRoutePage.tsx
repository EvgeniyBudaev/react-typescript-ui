import type { FC } from "react";
import "./PrivateRoutePage.scss";
import { ETypographyVariant, Typography } from "uikit";

export const PrivateRoutePage: FC = () => {
  return (
    <section className="TestPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Private Route</Typography>
    </section>
  );
};

import type { FC } from "react";
import { ETypographyVariant, Icon, Typography } from "uikit";
import "./IconPage.scss";

export const IconPage: FC = () => {
  return (
    <section className="IconPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Icon</Typography>
      <Icon type="Close" />
    </section>
  );
};

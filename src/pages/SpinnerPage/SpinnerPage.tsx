import type { FC } from "react";
import { ETypographyVariant, Spinner, Typography } from "uikit";
import "./SpinnerPage.scss";

export const SpinnerPage: FC = () => {
  return (
    <section className="SpinnerPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Spinner</Typography>
      <section className="SpinnerPage-Section">
        <Spinner />
      </section>
    </section>
  );
};

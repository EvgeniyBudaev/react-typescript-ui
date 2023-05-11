import React from "react";
import type { FC } from "react";
import { Hr } from "components";
import { ETypographyVariant, Typography } from "uikit";

export const TypographyPage: FC = () => {
  return (
    <section>
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Title as h1
      </Typography>
      <Hr />
      <Typography as="div" variant={ETypographyVariant.TextH1Medium}>
        Typography as div
      </Typography>
      <Hr />
      <Typography as="label" htmlFor="Name" variant={ETypographyVariant.TextB2Regular}>
        Typography as label
      </Typography>
    </section>
  );
};

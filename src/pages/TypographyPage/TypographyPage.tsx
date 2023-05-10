import React from "react";
import type { FC } from "react";
import { Hr } from "components";
import { ETypographyVariant, Typography } from "uikit";

export const TypographyPage: FC = () => {
  return (
    <section>
      <Typography as="div" variant={ETypographyVariant.TextH1Medium}>
        Typography
      </Typography>
      <Hr />
      <Typography as="div" variant={ETypographyVariant.TextH1Bold}>
        Title
      </Typography>
    </section>
  );
};

import type { FC } from "react";
import { Breadcrumbs, ETypographyVariant, Typography } from "uikit";

export const BreadcrumbsDetailPage: FC = () => {
  return (
    <section className="BreadcrumbsDetailPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Breadcrumbs detail page</Typography>
      <Breadcrumbs />
    </section>
  );
};

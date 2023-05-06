import type { FC } from "react";
import { Link } from "react-router-dom";
import { ERoutes } from "enums";
import { Breadcrumbs, ETypographyVariant, Typography } from "uikit";

export const BreadcrumbsPage: FC = () => {
  return (
    <section className="BreadcrumbsPage">
      <Typography variant={ETypographyVariant.TextH1Medium}>Breadcrumbs</Typography>
      <Breadcrumbs />
      <Link to={`${ERoutes.Breadcrumbs}/1`}>Go to detail page</Link>
    </section>
  );
};

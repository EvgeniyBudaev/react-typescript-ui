import type { FC } from "react";
import { Link } from "react-router-dom";
import { ERoutes } from "enums";
import { Breadcrumbs } from "uikit";

export const BreadcrumbsPage: FC = () => {
  return (
    <section className="BreadcrumbsPage">
      <h2>Breadcrumbs</h2>
      <Breadcrumbs />
      <Link to={`${ERoutes.Breadcrumbs}/1`}>Go to detail page</Link>
    </section>
  );
};

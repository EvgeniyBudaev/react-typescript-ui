import React from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Title } from "components";
import { ERoutes } from "enums";
import { Breadcrumbs } from "uikit";

export const BreadcrumbsPage: FC = () => {
  return (
    <section>
      <Title>Breadcrumbs</Title>
      <Breadcrumbs />
      <Link to={`${ERoutes.Breadcrumbs}/1`}>Go to detail page</Link>
    </section>
  );
};

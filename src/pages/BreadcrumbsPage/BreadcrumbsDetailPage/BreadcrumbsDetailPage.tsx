import React from "react";
import type { FC } from "react";
import { Title } from "components";
import { Breadcrumbs } from "uikit";

export const BreadcrumbsDetailPage: FC = () => {
  return (
    <section className="BreadcrumbsDetailPage">
      <Title>Breadcrumbs detail page</Title>
      <Breadcrumbs />
    </section>
  );
};

import type { FC } from "react";
import { Title } from "components/Title";
import { Breadcrumbs } from "uikit";

export const BreadcrumbsDetailPage: FC = () => {
  return (
    <section className="BreadcrumbsDetailPage">
      <Title>Breadcrumbs detail page</Title>
      <Breadcrumbs />
    </section>
  );
};

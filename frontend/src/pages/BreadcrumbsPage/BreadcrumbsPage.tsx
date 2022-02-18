import React, { useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { Breadcrumbs } from "ui-kit";
import { IBreadcrumbsLocationState } from "ui-kit/Breadcrumbs";
import { isContainRoute } from "utils/breadcrumbs";
import "./BreadcrumbsPage.scss";

export const BreadcrumbsPage: React.FC = () => {
  const history = useHistory();
  const { state } = useLocation<IBreadcrumbsLocationState[]>();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    if (state && !isContainRoute(state, path)) {
      history.replace({
        state: [...state, { path, url, title: "breadcrumbs" }],
      });
    }
  }, [path, url, state, history]);

  return (
    <section className="BreadcrumbsPage">
      <h2>Breadcrumbs</h2>
      <Breadcrumbs />
    </section>
  );
};

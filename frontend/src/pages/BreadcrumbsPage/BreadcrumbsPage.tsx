import React, { useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { ToastContainer as ErrorPopup } from "react-toastify";
import isNil from "lodash/isNil";
import { ProductsList } from "components";
import { useApiProducts } from "hooks/useApiProducts";
import { Breadcrumbs, Spinner } from "ui-kit";
import { IBreadcrumbsLocationState } from "ui-kit/Breadcrumbs";
import { AlertError } from "utils/alert";
import { isContainRoute } from "utils/breadcrumbs";
import "react-toastify/dist/ReactToastify.css";
import "./BreadcrumbsPage.scss";

export const BreadcrumbsPage: React.FC = () => {
  const history = useHistory();
  const { state } = useLocation<IBreadcrumbsLocationState[]>();
  const { url, path } = useRouteMatch();
  const { products, error, isLoading } = useApiProducts();

  useEffect(() => {
    if (state && !isContainRoute(state, path)) {
      history.replace({
        state: [...state, { path, url, title: "breadcrumbs" }],
      });
    }
  }, [path, url, state, history]);

  useEffect(() => {
    if (error) {
      AlertError(error.error.body);
    }
  }, [error]);

  if (isLoading) return <Spinner />;

  return (
    <section className="BreadcrumbsPage">
      <ErrorPopup />
      <h2>Breadcrumbs</h2>
      <Breadcrumbs />
      {!isNil(products) ? (
        <ProductsList products={products.entities} />
      ) : (
        <div className="Warning">
          To display a list of products, you need to run the backend. Apply
          migrations. Fill the database with goods.
        </div>
      )}
    </section>
  );
};

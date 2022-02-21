import React, { useEffect } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { ToastContainer as ErrorPopup } from "react-toastify";
import isNil from "lodash/isNil";
import { Error404 } from "components";
import { useApiProductCard } from "hooks/useApiProductCard";
import { Breadcrumbs, Spinner } from "ui-kit";
import { IBreadcrumbsLocationState } from "ui-kit/Breadcrumbs";
import { AlertError } from "utils/alert";
import { isContainRoute } from "utils/breadcrumbs";
import "react-toastify/dist/ReactToastify.css";
import "./ProductCard.scss";

export const ProductCard: React.FC = () => {
  const history = useHistory();
  const location = useLocation<IBreadcrumbsLocationState[]>();
  const { state } = location;
  const { url, path } = useRouteMatch();
  const { id } = useParams<{ id: string }>();
  const { product, error, isLoading } = useApiProductCard(id);

  useEffect(() => {
    if (error) {
      AlertError(error.error.body);
    }
  }, [error]);

  useEffect(() => {
    if (product && state && !isContainRoute(state, url)) {
      history.replace({
        state: [...state, { path, url, title: product.title }],
      });
    }
  }, [product, path, url, state, history]);

  if (isLoading) return <Spinner />;

  return !isNil(product) ? (
    <div className="ProductCard">
      <ErrorPopup />
      <Breadcrumbs />
      <h1 className="ProductCard-Title">{product.title}</h1>
      <div className="ProductCard-Price">{product.price}</div>
      <img
        className="ProductCard-Image"
        src={product?.image}
        alt={product.title}
      />
    </div>
  ) : (
    <Error404 />
  );
};

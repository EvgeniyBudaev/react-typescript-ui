import React, { useEffect } from "react";
import { ToastContainer as ErrorPopup } from "react-toastify";
import isNil from "lodash/isNil";
import { ProductsList } from "components";
import { useApiProducts } from "hooks/useApiProducts";
import { Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import "react-toastify/dist/ReactToastify.css";
import "./ErrorPage.scss";

export const ErrorPage: React.FC = () => {
  const { products, error, isLoading } = useApiProducts();

  useEffect(() => {
    if (error) {
      AlertError(error.error.body);
    }
  }, [error]);

  if (isLoading) return <Spinner />;

  return (
    <section className="ErrorPage">
      <ErrorPopup />
      <h2>Error status</h2>
      {!isNil(products) ? (
        <ProductsList products={products.entities} />
      ) : (
        <div className="PaginationPage-Warning">
          To display a list of products, you need to run the backend. Apply
          migrations. Fill the database with goods.
        </div>
      )}
    </section>
  );
};

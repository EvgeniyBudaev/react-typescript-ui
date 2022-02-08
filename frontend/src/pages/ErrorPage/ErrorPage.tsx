import React, { useEffect, useState } from "react";
import { ToastContainer as ErrorPopup } from "react-toastify";
import isNil from "lodash/isNil";
import { getProductsByError } from "api/product";
import { ProductsList } from "components";
import { IFilter, IProduct } from "types/product";
import { Spinner } from "ui-kit";
import { AlertError } from "utils/alert";
import "react-toastify/dist/ReactToastify.css";
import "./ErrorPage.scss";

export const ErrorPage: React.FC = () => {
  const [products, setProducts] = useState<IFilter<IProduct>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await getProductsByError();
      if (response.success) {
        setProducts(response.data);
        setIsLoading(false);
      } else {
        AlertError(response.error.body, response.error.message);
        setIsLoading(false);
      }
    };
    void fetchProducts();
  }, []);

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

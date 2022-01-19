import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import isNaN from "lodash/isNaN";
import { getProducts } from "api/product";
import { ProductsList } from "components";
import { IFilter, IProduct } from "types/product";
import { Pagination } from "ui-kit";
import "./PaginationPage.scss";

export const PaginationPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const pageNumber = !isNaN(Number(location.search.split("=")[1]))
    ? Number(location.search.split("=")[1])
    : 1;
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const [pagesCount, setPagesCount] = useState(0);
  const [products, setProducts] = useState<IFilter<IProduct>>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(currentPage);
        const pagesQuantity = Math.max(
          Math.ceil(response.totalItemsCount / response.pageItemsCount),
          1
        );
        setProducts(response);
        setPagesCount(pagesQuantity);
      } catch (error) {
        console.error(error);
      }
    };
    void fetchProducts();
  }, [currentPage]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
    history.replace(`?page=${selected + 1}`);
  };

  return (
    <section className="PaginationPage">
      <h2>Pagination</h2>
      {!isEmpty(products) ? (
        <>
          <ProductsList products={products.entities} />
          <Pagination
            initialPage={pageNumber - 1}
            pagesCount={pagesCount}
            onChange={handlePageChange}
          />
        </>
      ) : (
        <div className="PaginationPage-Warning">
          To display a list of products, you need to run the backend. Apply
          migrations. Fill the database with goods.
        </div>
      )}
    </section>
  );
};

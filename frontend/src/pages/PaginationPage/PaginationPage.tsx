import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import { getProducts } from "api/product";
import { ProductsList } from "components";
import { IFilter, IProduct } from "types/product";
import { Pagination } from "ui-kit";
import "./PaginationPage.scss";

export const PaginationPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const pageNumber = Number(location.search.split("=")[1]);
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
        console.log(error);
      }
    };
    void fetchProducts();
  }, [currentPage]);

  const handlePageChange = (currentButton: number) => {
    setCurrentPage(currentButton);
    history.replace(`?page=${currentButton}`);
  };

  return (
    <section className="PaginationPage">
      <h2>Pagination</h2>
      {!isEmpty(products) ? (
        <>
          <ProductsList products={products.entities} />
          <Pagination pages={pagesCount} onChange={handlePageChange} />
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

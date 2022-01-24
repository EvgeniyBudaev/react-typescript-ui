import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Column } from "react-table";
import isNaN from "lodash/isNaN";
import { getProductsByPagination } from "api/product";
import { IFilter, IProduct } from "types/product";
import { IconButton, Spinner, Table } from "ui-kit";
import "./TablePage.scss";

export const TablePage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const pageNumber = !isNaN(Number(location.search.split("=")[1]))
    ? Number(location.search.split("=")[1])
    : 1;
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const [isLoading, setIsLoading] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);
  const [products, setProducts] = useState<IFilter<IProduct>>();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getProductsByPagination(currentPage);
        const pagesQuantity = Math.max(
          Math.ceil(response.totalItemsCount / response.pageItemsCount),
          1
        );
        setProducts(response);
        setPagesCount(pagesQuantity);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchProducts();
  }, [currentPage]);

  const data =
    products && (products.entities as unknown as Record<string, unknown>[]);

  const columns: Column<Record<string, unknown>>[] = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Edit",
        accessor: "id",
        Cell: props => {
          const rowIdx = props.value;

          return (
            <div>
              <IconButton typeIcon="Edit" onClick={() => handleEdit(rowIdx)} />
            </div>
          );
        },
      },
    ],
    []
  );

  const handleEdit = (id: number) => {
    console.log("selected edit id: ", id);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
    history.replace(`?page=${selected + 1}`);
  };

  if (isLoading) return <Spinner />;

  return (
    <section className="TablePage">
      <h2>Table</h2>
      {products && (
        <Table
          columns={columns}
          currentPage={currentPage}
          data={data}
          pagesCount={pagesCount}
          isPagination
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
};

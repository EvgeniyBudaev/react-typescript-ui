import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Column } from "react-table";
import queryString from "query-string";
import { getProductsByTable } from "api/product";
import { IFilter, IProduct } from "types/product";
import { IconButton, Spinner, Table } from "ui-kit";
import { TableSortingType } from "ui-kit/Table";
import "./TablePage.scss";

export const TablePage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);
  const [products, setProducts] = useState<IFilter<IProduct>>();
  const parsedUrl = queryString.parse(location.search);
  const pageParsedUrl = parsedUrl.page ? Number(parsedUrl.page) : 1;
  const searchParsedUrl = parsedUrl.search ? parsedUrl.search.toString() : "";
  const [currentPage, setCurrentPage] = useState(pageParsedUrl);
  const [searchedKeyword, setSearchedKeyword] = useState(searchParsedUrl);
  const [sorting, setSorting] = useState<TableSortingType>({
    title: "",
    price: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getProductsByTable(
          currentPage,
          searchParsedUrl as string,
          { ...sorting }
        );
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
  }, [currentPage, searchParsedUrl, sorting]);

  const data =
    products && (products.entities as unknown as Record<string, unknown>[]);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const columns: Column<object>[] = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        disableSortBy: false,
        maxWidth: 700,
        minWidth: 700,
      },
      {
        Header: "Price",
        accessor: "price",
        disableSortBy: false,
        maxWidth: 200,
        minWidth: 200,
      },
      {
        Header: "Edit",
        accessor: "id",
        disableSortBy: true,
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
    if (searchParsedUrl) {
      history.replace(`?page=${selected + 1}&search=${searchParsedUrl}`);
    } else {
      history.replace(`?page=${selected + 1}`);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    history.replace(`?page=${1}&search=${event.target.value}`);
    setSearchedKeyword(event.target.value);
    setCurrentPage(1);
  };

  const handleSort = (sorting: TableSortingType) => {
    setSorting(prevState => ({
      ...prevState,
      ...sorting,
    }));
  };

  if (isLoading) return <Spinner />;

  return (
    <section className="TablePage">
      <h2>Table</h2>
      {products && data && (
        <Table
          columns={columns}
          currentPage={currentPage}
          data={data}
          pagesCount={pagesCount}
          searchedKeyword={searchedKeyword}
          sorting={sorting}
          isPagination
          isSearch
          onPageChange={handlePageChange}
          onSearchChange={handleSearchChange}
          onSort={handleSort}
        />
      )}
    </section>
  );
};

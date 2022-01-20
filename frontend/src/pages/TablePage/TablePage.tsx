import React, { useEffect, useState } from "react";
import { getProducts } from "api/product";
import { IFilter, IProduct } from "types/product";
import { Spinner, Table } from "ui-kit";
import "./TablePage.scss";

export const TablePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<IFilter<IProduct>>();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getProducts();
        console.log("response", response);
        setProducts(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchProducts();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <section className="TablePage">
      <h2>Table</h2>
      {products && <Table data={products.entities} />}
    </section>
  );
};

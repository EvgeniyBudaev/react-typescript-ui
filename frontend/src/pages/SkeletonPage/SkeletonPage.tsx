import React, { useEffect, useState } from "react";
import { getProducts } from "api/product";
import { Product } from "components/Products/Product/Product";
import { IFilter, IProduct } from "types/product";
import { Skeleton } from "ui-kit";
import "./SkeletonPage.scss";

export const SkeletonPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IFilter<IProduct>>();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(true);
      }
    };
    void fetchProducts();
  }, []);

  return (
    <section className="SkeletonPage">
      <h2>Skeleton</h2>
      <div style={{ height: "50px", width: "50px", marginBottom: "25px" }}>
        {isLoading && <Skeleton />}
      </div>
      {isLoading ? <Skeleton height="27px" width="200px" /> : <h2>Skeleton</h2>}
      {isLoading ? (
        <div className="ProductsList">
          {new Array(10).fill(1).map((product, index) => (
            <Skeleton height="330px" width="100%" key={index} />
          ))}
        </div>
      ) : (
        <div className="ProductsList">
          {products &&
            products.entities.map(product => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      )}
      {isLoading ? (
        <Skeleton height="100px" width="100px" isCircle />
      ) : (
        <div style={{ height: "100px" }} />
      )}
    </section>
  );
};

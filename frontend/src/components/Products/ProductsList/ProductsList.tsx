import React from "react";
import { IProduct } from "types/product";
import { Product } from "../Product/Product";
import "./ProductsList.scss";

export interface IProductsListProps {
  products: IProduct[];
}

export const ProductsList: React.FC<IProductsListProps> = ({ products }) => {
  return (
    <div className="ProductsList">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

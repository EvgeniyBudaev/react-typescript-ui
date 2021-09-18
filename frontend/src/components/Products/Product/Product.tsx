import React from "react";
import { IProduct } from "types/product";
import "./Product.scss";

export interface IProductProps {
  product: IProduct;
}

export const Product: React.FC<IProductProps> = ({ product }) => {
  return (
    <div className="Product">
      <img className="Product-Images" src={product.image} alt="" />
      <div className="Product-Title">{product.title}</div>
      <div className="Product-Price">{product.price} руб.</div>
    </div>
  );
};

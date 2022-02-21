import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "routes";
import { IProduct } from "types/product";
import "./Product.scss";

export interface IProductProps {
  product: IProduct;
}

export const Product: React.FC<IProductProps> = ({ product }) => {
  const history = useHistory();

  return (
    <Link
      to={{
        pathname: `${ROUTES.BREADCRUMBS}/${product.id}`,
        state: history.location.state,
      }}
    >
      <div className="Product">
        <img
          className="Product-Images"
          src={product.image}
          alt={product.title}
        />
        <div className="Product-Title">{product.title}</div>
        <div className="Product-Price">{product.price} руб.</div>
      </div>
    </Link>
  );
};

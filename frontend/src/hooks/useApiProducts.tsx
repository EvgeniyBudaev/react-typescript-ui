import { useState, useEffect } from "react";
import { getProductsByError } from "api/product";
import { TErrorResponse } from "api/types/common";
import { IFilter, IProduct } from "types/product";

interface IUseApiProductsResponse {
  products?: IFilter<IProduct>;
  isLoading: boolean;
  error: TErrorResponse | null;
}

export const useApiProducts = (): IUseApiProductsResponse => {
  const [products, setProducts] = useState<IFilter<IProduct>>();
  const [isLoading, setIsLoading] = useState<boolean>(!products);
  const [error, setError] = useState<TErrorResponse | null>(null);

  useEffect(() => {
    getProductsByError(setProducts, setIsLoading, setError);
  }, []);

  return {
    products,
    isLoading,
    error,
  };
};

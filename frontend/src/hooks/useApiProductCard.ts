import { useState, useEffect } from "react";
import { getProductCard } from "api/product";
import { TErrorResponse } from "api/types/common";
import { IProduct } from "types/product";

interface IUseApiProductsResponse {
  error: TErrorResponse | null;
  product?: IProduct;
  isLoading: boolean;
}

export const useApiProductCard = (
  id: string | number
): IUseApiProductsResponse => {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState<boolean>(!product);
  const [error, setError] = useState<TErrorResponse | null>(null);

  useEffect(() => {
    getProductCard(id, setProduct, setIsLoading, setError);
  }, [id]);

  return {
    product,
    isLoading,
    error,
  };
};

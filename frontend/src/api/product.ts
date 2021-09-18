import axios from "axios";
import { ISortingOption } from "ui-kit/Select";
import { IProduct } from "types/product";

export const fetchProducts = async (
  sortingOption: ISortingOption
): Promise<IProduct[]> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get<IProduct[]>(
    `http://127.0.0.1:8000/api/v1/products/?ordering=${sortingOption.value}`,
    config
  );

  return response.data;
};

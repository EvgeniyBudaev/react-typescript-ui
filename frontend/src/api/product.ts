import { BASE_URL } from "constants/url";
import axios from "axios";
import { ISelectOption } from "ui-kit/Select";
import { IFilter, IProduct } from "types/product";

export const getProducts = async (): Promise<IFilter<IProduct>> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get<IFilter<IProduct>>(
    `${BASE_URL}products/`,
    config
  );
  return response.data;
};

export const getProductsBySelect = async (
  selectOption: ISelectOption
): Promise<IProduct[]> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get<IProduct[]>(
    `${BASE_URL}products/?ordering=${selectOption.value}`,
    config
  );
  return response.data;
};

export const getProductsByPagination = async (
  pageNumber: number
): Promise<IFilter<IProduct>> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get<IFilter<IProduct>>(
    `${BASE_URL}products/?page=${pageNumber}`,
    config
  );
  return response.data;
};

export const getProductsByTable = async (
  pageNumber: number,
  searchedKeyword = ""
): Promise<IFilter<IProduct>> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get<IFilter<IProduct>>(
    `${BASE_URL}products/?page=${pageNumber}&search=${searchedKeyword}`,
    config
  );
  return response.data;
};

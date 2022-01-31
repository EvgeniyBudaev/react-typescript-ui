import { BASE_URL } from "constants/url";
import { MultiValue, SingleValue } from "react-select";
import axios from "axios";
import { IFilter, IProduct } from "types/product";
import { ISelectOption } from "ui-kit/Select";
import { TableSortingType } from "ui-kit/Table";

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
  selectOption: SingleValue<ISelectOption> | MultiValue<ISelectOption>
): Promise<IFilter<IProduct>> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (selectOption && "value" in selectOption) {
    const response = await axios.get<IFilter<IProduct>>(
      `${BASE_URL}products/?ordering=${selectOption.value}`,
      config
    );
    return response.data;
  } else {
    return { entities: [], pageItemsCount: 0, totalItemsCount: 0 };
  }
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
  searchedKeyword = "",
  sorting: TableSortingType
): Promise<IFilter<IProduct>> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const orderingFields = Object.values(sorting).join(",");
  const response = await axios.get<IFilter<IProduct>>(
    `${BASE_URL}products/?page=${pageNumber}&ordering=${orderingFields}&search=${searchedKeyword}`,
    config
  );
  return response.data;
};

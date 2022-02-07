import { BASE_URL } from "constants/url";
import { MultiValue, SingleValue } from "react-select";
import axios, { AxiosError } from "axios";
import { IFilter, IProduct } from "types/product";
import { ISelectOption } from "ui-kit/Select";
import { TableSortingType } from "ui-kit/Table";
import { getErrorStatus } from "../utils/error";
import { AlertError } from "../utils/alert";

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

type TApiResponse<TData, TError> =
  | {
      success: true;
      data: TData;
    }
  | {
      success: false;
      error: TError;
    };

type TError = {
  body: string;
  message: string;
};

export const getProductsByError = async (): Promise<
  TApiResponse<IFilter<IProduct>, TError>
> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get<IFilter<IProduct>>(
      `${BASE_URL}products2`,
      config
    );
    return { success: true, data: response.data };
  } catch (err) {
    const error = err as AxiosError;
    if (error) {
      if (error.response) {
        const errorStatus = getErrorStatus(error);
        if (errorStatus === 404) {
          return {
            success: false,
            error: {
              body: "Запрашиваемой страницы не существует!",
              message: error.message,
            },
          };
        }
        if (errorStatus === 500) {
          return {
            success: false,
            error: {
              body: "Ошибка сервера!",
              message: error.message,
            },
          };
        }
      } else if (error.request) {
        return {
          success: false,
          error: {
            body:
              error.message === "Network Error"
                ? "Нет соединения с интернетом!"
                : "Не правильные параметры запроса!",
            message: error.message,
          },
        };
      } else {
        return {
          success: false,
          error: {
            body: "Не удалось получить данные!",
            message: error.message,
          },
        };
      }
    }
    return {
      success: false,
      error: {
        body: "Что-то пошло не так!",
        message: error.message,
      },
    };
  }
};

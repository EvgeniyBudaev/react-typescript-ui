import axios, { AxiosError } from "axios";
import { TErrorResponse } from "api/types/common";

export const getErrorStatus = (error: AxiosError): number | null => {
  if (axios.isAxiosError(error)) {
    return error.response?.status || null;
  }
  return null;
};

export const getErrorByStatus = (error: AxiosError): TErrorResponse => {
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
      if (errorStatus && errorStatus >= 500) {
        return {
          success: false,
          error: {
            body: "Ошибка сервера!",
            message: error.message,
          },
        };
      }
    }
    if (error.request) {
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
    }
  }
  return {
    success: false,
    error: {
      body: "Не удалось получить данные!",
      message: error.message,
    },
  };
};

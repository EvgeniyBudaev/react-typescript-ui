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
            body: "Page not found!",
            message: error.message,
          },
        };
      }
      if (errorStatus && errorStatus >= 500) {
        return {
          success: false,
          error: {
            body: "Server error!",
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
              ? "No internet connection!"
              : "Invalid request parameters!",
          message: error.message,
        },
      };
    }
  }
  return {
    success: false,
    error: {
      body: "Failed to get data!",
      message: error.message,
    },
  };
};

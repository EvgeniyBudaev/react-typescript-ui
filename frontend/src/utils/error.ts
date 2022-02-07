import axios, { AxiosError } from "axios";

export const getErrorStatus = (error: AxiosError): number | null => {
  if (axios.isAxiosError(error)) {
    return error.response?.status || null;
  }

  return null;
};

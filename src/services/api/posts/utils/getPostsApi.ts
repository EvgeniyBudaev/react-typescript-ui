import axios from "axios";
import isNil from "lodash/isNil";
import type { TPosts, TPostsParams } from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPostsApi = async (params?: TPostsParams) => {
  const searchParams = !isNil(params) ? `?${new URLSearchParams(params)}` : "";
  const url = `${BASE_URL}/posts${searchParams}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get<TPosts>(url, config);
  return response.data;
};

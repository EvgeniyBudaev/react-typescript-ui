import axios from "axios";
import type { TPosts, TPostsParams } from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPostsApi = async ({ params }: TPostsParams) => {
  const url = `${BASE_URL}/posts?${new URLSearchParams(params)}`;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get<TPosts>(url, config);
  return response.data;
};

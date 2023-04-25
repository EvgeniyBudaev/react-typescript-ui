import axios from "axios";
import { TPosts } from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPostsApi = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get<TPosts>(`${BASE_URL}/posts`, config);
  return response.data;
};

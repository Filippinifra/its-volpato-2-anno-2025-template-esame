import axios from "axios";
import { getToken } from "./token";

export const axiosWithToken = axios.create();

axiosWithToken.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

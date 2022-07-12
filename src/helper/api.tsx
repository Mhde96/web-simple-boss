import axios from "axios";
import { baseURL } from "../constant/configEndpoints";
import { Cookies } from "react-cookie";

const api = axios.create({
  baseURL: baseURL,
  timeout: 200000,
  headers: {
    // "Content-Type": "multipart/form-data",
    // 'Content-Type': 'application/x-www-form-urlencoded'
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const cookies = new Cookies();
  const token = () => cookies.get("user")?.token;

  
  config.headers = {
    ...config.headers,

    Authorization: `Bearer ${token()}`,
  };

  return config;
});

console.log("configration axios done");

export { api };

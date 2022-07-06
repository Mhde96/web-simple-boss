import axios from "axios";
import { baseURL } from "../constant/configEndpoints";
export const api = axios.create({
  baseURL: baseURL,
  timeout: 200000,
  headers: {
    // Authorization: `Bearer ${token}`,

    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

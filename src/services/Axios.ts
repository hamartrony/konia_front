import axios from "axios";
import { Environment } from "../Environment";
import { errorIntercept, responseIntercept } from "./intercept";

export const Api = axios.create({
  baseURL: Environment.URL_BASE,
});

Api.interceptors.response.use(
  (response) => responseIntercept(response),
  (error) => errorIntercept(error)
);

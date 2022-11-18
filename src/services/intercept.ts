import { AxiosError, AxiosResponse } from "axios";

export const errorIntercept = (error: AxiosError) => {
  if (error.message) {
    return Promise.reject(new Error(error.message));
  }

  return Promise.reject(error);
};

export const responseIntercept = (response: AxiosResponse) => {
  return response;
};

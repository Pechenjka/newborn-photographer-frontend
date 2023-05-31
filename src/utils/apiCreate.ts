import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { apiAuthorization } from "./apiAuth";

const URL = "https://api.alenalobacheva.net";
//const URL = "http://localhost:3005";
const $api = axios.create({ withCredentials: true, baseURL: URL });

$api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  if (config.headers === undefined) {
    return (config.headers = {});
  }
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  async (config: AxiosResponse) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const res = await apiAuthorization().refresh();
        localStorage.setItem("token", res.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log("Not authorized");
      }
    }
    return Promise.reject(error);
  }
);

export default $api;

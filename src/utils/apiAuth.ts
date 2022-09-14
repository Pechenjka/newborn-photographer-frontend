import { AxiosResponse } from "axios";
import { ICreateUser, IRefreshTokenResponse, IUpdateUser, IUserResponse } from "../types";
import $api from "./apiCreate";

export const apiAuthorization = (): {
  registration: any;
  login: any;
  logout: any;
  refresh: any;
  userInfo: any;
  updateUser: any;
} => {
  return {
    registration: async (data: ICreateUser): Promise<AxiosResponse<ICreateUser>> => {
      const { name, email, password, role } = data;
      return await $api.post("/user/signup", { name, email, password, role });
    },
    login: async (data: { email: string; password: string }): Promise<AxiosResponse<IUserResponse>> => {
      const { email, password } = data;
      return await $api.post("/user/signin", { email, password });
    },
    logout: async (): Promise<void> => {
      return await $api.post("/user/logout");
    },
    refresh: async (): Promise<AxiosResponse<IRefreshTokenResponse>> => {
      return await $api.get("/user/refresh", { withCredentials: true });
    },
    userInfo: async (): Promise<AxiosResponse<IUserResponse>> => {
      return await $api.get("/user/me");
    },
    updateUser: async (data: IUpdateUser): Promise<AxiosResponse<IUserResponse>> => {
      const { name, email, phone, orders } = data;
      return await $api.patch("/user/update", { name, email, phone, orders });
    },
  };
};

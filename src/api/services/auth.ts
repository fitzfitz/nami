import { LoginForm } from "@nami/app/Login";
import { client } from "@nami/utils";
import { AxiosRequestConfig } from "axios";
import { User } from "../types/auth";

export const fetchLoginApi = async (
  data: LoginForm,
  config?: AxiosRequestConfig,
) => {
  const response = await client.post("/auth/login", data, config);
  return response.data as User;
};

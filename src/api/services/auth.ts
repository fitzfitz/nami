import { client } from "@nami/utils";
import { User } from "../types/auth";

export const fetchLoginApi = async () => {
  const response = await client.post("/auth/login");
  return response.data as User;
};

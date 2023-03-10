// import { ImageNewForm } from "@nami/app/Images";
import { client } from "@nami/utils";
import { AxiosRequestConfig } from "axios";

export const onUploadBulkApi = async (
  request: FormData,
  config?: AxiosRequestConfig,
) => {
  const response = await client.post("/upload/bulk", request, config);
  return response.data as any;
};

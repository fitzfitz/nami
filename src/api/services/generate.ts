import { FilterDataProps } from "@nami/core/customs/CustomFilter";
import { client } from "@nami/utils";

export const fetchGenerateNameApi = async (
  request?: FilterDataProps,
  pageNumber = 1,
) => {
  const response = await client.post(
    `/ask-fitz/generate-names?pageNumber=${pageNumber}`,
    request,
  );
  return response.data as any;
};

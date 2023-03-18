import { fetchGenerateNameApi } from "@nami/api/services/generate";
import { FilterDataProps } from "@nami/core/customs/CustomFilter";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useGetNamesInfinite = (params?: FilterDataProps) =>
  useInfiniteQuery(
    [`generate-name`, params],
    ({ pageParam = 1 }) => fetchGenerateNameApi(params, pageParam),
    {
      enabled: !!params,
      getNextPageParam: (_, allPages) => {
        const total = 1000;
        const allCurrentData = allPages.map((page) => page?.data)?.flat();
        const nextPage =
          allCurrentData?.length < total ? allPages.length + 1 : undefined;

        return nextPage;
      },
    },
  );

export const useGetNames = (params?: FilterDataProps) =>
  useQuery([`generate-name`, params], () => fetchGenerateNameApi(params), {
    enabled: !!params,
  });

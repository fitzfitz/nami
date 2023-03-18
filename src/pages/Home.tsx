import React, { useState } from "react";
import { CustomFilter } from "@nami/core/customs";
import { cleanObjects } from "@fitzzz/utils";
import { FilterDataProps } from "@nami/core/customs/CustomFilter";
import { useGetNamesInfinite } from "@nami/app/filters";
import {
  InitialSearch,
  Results,
  SearchError,
  Welcome,
} from "@nami/app/Dashboard";

const Home = () => {
  const [filter, setFilter] = useState<FilterDataProps | undefined>();

  const {
    data: names,
    isInitialLoading,
    isFetchingNextPage,
    isError,
    refetch,
    fetchNextPage,
  } = useGetNamesInfinite(filter);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <Results
        show={!!names && !isInitialLoading && !isError}
        data={names?.pages?.flat() || []}
        isLoadMore={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
      <InitialSearch show={isInitialLoading} />
      <SearchError show={isError} refetch={refetch} />
      <Welcome show={!filter} />
      <div className="sticky bottom-5">
        <CustomFilter
          onSubmit={(data) => {
            const filterSubmitted = cleanObjects(data, { nullIfEmpty: true });
            setFilter(filterSubmitted || undefined);
          }}
        />
      </div>
    </div>
  );
};

export default Home;

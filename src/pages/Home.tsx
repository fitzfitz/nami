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
import { motion } from "framer-motion";

const Home = () => {
  const [filter, setFilter] = useState<FilterDataProps | undefined>();

  const {
    data: names,
    isFetching,
    isInitialLoading,
    isFetchingNextPage,
    isError,
    refetch,
    fetchNextPage,
  } = useGetNamesInfinite(filter);

  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-8">
      <Welcome show={!filter} />
      {filter ? (
        <motion.div
          initial={{ height: 100, opacity: 0.2 }}
          animate={{ height: "100%", opacity: 1 }}
          transition={{ delay: 0.3, duratation: 1 }}
          exit={{
            height: 0,
            opacity: 0,
            transition: { delay: 0, duratation: 1 },
          }}
          className="flex h-full w-full items-center justify-center"
        >
          <InitialSearch show={isInitialLoading} />
          <Results
            show={!!names && !isInitialLoading}
            isError={!!isError}
            data={names?.pages?.flat() || []}
            isLoadMore={isFetching || isFetchingNextPage}
            fetchNextPage={fetchNextPage}
            refetch={refetch}
          />
          <SearchError show={!names && isError} refetch={refetch} />
        </motion.div>
      ) : null}
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

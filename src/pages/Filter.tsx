import React, { useState } from "react";
import { CustomFilter } from "@nami/core/customs";
import { cleanObjects, strToJson } from "@fitzzz/utils";
import { useSearchParams } from "react-router-dom";
import { FilterDataProps } from "@nami/core/customs/CustomFilter";
import { SearchResult, useGetNamesInfinite } from "@nami/app/filters";
import { BiLoaderAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { IoReload } from "react-icons/io5";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParams = searchParams.get("filter");
  const filter: FilterDataProps | undefined = filterParams
    ? strToJson(filterParams)
    : undefined;
  const [filterData, setFilterData] = useState<FilterDataProps | undefined>(
    filter,
  );

  const {
    data: names,
    isInitialLoading,
    isFetchingNextPage,
    isError,
    refetch,
    fetchNextPage,
  } = useGetNamesInfinite(filterData);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      {names && !isInitialLoading && !isError ? (
        <div className="flex w-full flex-col items-center gap-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
            className="text-center font-rammetto text-lg font-bold md:text-2xl md:leading-[2.5625rem]"
          >
            Menampilkan hasil
          </motion.div>
          <SearchResult
            data={names?.pages?.flat()}
            isError={isError}
            isLoadMore={isFetchingNextPage}
            onMore={fetchNextPage}
          />
        </div>
      ) : null}
      {isInitialLoading ? (
        <div className="flex h-full flex-1 items-center justify-center gap-3">
          <BiLoaderAlt className="animate-spin" size={18} />
          <span className="text-base">Sedang meracik nama...</span>
        </div>
      ) : null}
      {isError ? (
        <button
          onClick={() => refetch()}
          className="flex h-full flex-1 items-center justify-center gap-3"
        >
          <IoReload size={18} />
          <span className="text-base">Error, muat ulang...</span>
        </button>
      ) : null}
      <div className="sticky bottom-5">
        <CustomFilter
          filterData={filter}
          onSubmit={(data) => {
            const resData = cleanObjects(data, { nullIfEmpty: true });
            setSearchParams(undefined);
            if (resData) {
              setFilterData(resData || undefined);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Filter;

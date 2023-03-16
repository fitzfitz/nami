import React, { useEffect, useState } from "react";
import { CustomFilter } from "@nami/core/customs";
import { cleanObjects, uuid } from "@fitzzz/utils";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FilterDataProps } from "@nami/core/customs/CustomFilter";
import { SearchResult } from "@nami/app/filters";
import { BiLoaderAlt } from "react-icons/bi";

const data = [
  {
    id: uuid.generate("easy"),
    name: "Abizar bahi",
    meaning: "Sang pemersatu bangsa",
    newIndex: 1,
  },
  {
    id: uuid.generate("easy"),
    name: "Abizar bahi",
    meaning: "Sang pemersatu bangsa",
    newIndex: 2,
  },
  {
    id: uuid.generate("easy"),
    name: "Abizar bahi",
    meaning: "Sang pemersatu bangsa",
    newIndex: 3,
  },
  {
    id: uuid.generate("easy"),
    name: "Abizar bahi",
    meaning: "Sang pemersatu bangsa",
    newIndex: 4,
  },
  {
    id: uuid.generate("easy"),
    name: "Abizar bahi",
    meaning: "Sang pemersatu bangsa",
    newIndex: 5,
  },
];

const Filter = () => {
  const [dataState, setDataState] = useState<typeof data>(data);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const filterParams = searchParams.get("filter");
  const filter: FilterDataProps | undefined = filterParams
    ? JSON.parse(filterParams)
    : undefined;

  const addMoreData = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setDataState([
        ...dataState.map((item) => ({ ...item, isNew: false })),
        ...data.map((item, newIndex) => ({
          ...item,
          id: uuid.generate("easy"),
          newIndex,
        })),
      ]);
      setIsLoadingMore(false);
    }, 1500);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      {!isLoading ? (
        <div className="flex w-full flex-col items-center gap-5">
          <div className="text-center font-rammetto text-lg font-bold md:text-2xl md:leading-[2.5625rem]">
            Menampilkan hasil
          </div>
          <SearchResult
            data={dataState}
            isLoadMore={isLoadingMore}
            onMore={addMoreData}
          />
        </div>
      ) : null}
      {isLoading ? (
        <div className="flex h-full flex-1 items-center justify-center gap-3">
          <BiLoaderAlt className="animate-spin" size={18} />
          <span className="text-base">Sedang meracik nama...</span>
        </div>
      ) : null}
      <div className="sticky bottom-5">
        <CustomFilter
          filterData={filter}
          onSubmit={(data) => {
            cleanObjects(data, { nullIfEmpty: true })
              ? navigate(`/filter?filter=${JSON.stringify(cleanObjects(data))}`)
              : undefined;
          }}
        />
      </div>
    </div>
  );
};

export default Filter;

import React from "react";
import { CustomFilter } from "@nami/core/customs";
import { cleanObjects } from "@fitzzz/utils";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FilterDataProps } from "@nami/core/customs/CustomFilter";
import { SearchResult } from "@nami/app/filters";
import { BiLoaderAlt } from "react-icons/bi";

const Filter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filterParams = searchParams.get("filter");
  const filter: FilterDataProps | undefined = filterParams
    ? JSON.parse(filterParams)
    : undefined;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="mb-3 flex w-full flex-col items-center gap-4">
        <div className="mb-4 text-center font-rammetto text-lg font-bold !leading-snug md:text-2xl ">
          Menampilkan hasil
        </div>
        <SearchResult />
        <button className="flex items-center gap-3 text-center text-base">
          <BiLoaderAlt /> Memuat lebih banyak
        </button>
      </div>
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

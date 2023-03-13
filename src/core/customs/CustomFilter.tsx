import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { list } from "@nami/config";
import SelectFilter from "./SelectFilter";

export interface FilterDataProps {
  meaning: string;
  gender: string | number;
  wordLength: number | string;
  origin: number | string;
}

export interface FilterProps {
  filterData?: FilterDataProps;
  onSubmit: (request: Partial<FilterDataProps>) => void;
}

const initialFilter = {
  meaning: undefined,
  gender: undefined,
  wordLength: undefined,
  origin: undefined,
};

const CustomFilter = ({ filterData, onSubmit }: FilterProps) => {
  const [filter, setFilter] = useState<Partial<FilterDataProps>>(
    filterData || initialFilter,
  );
  const setFilterData = (e: Partial<FilterDataProps>) =>
    setFilter((prev) => ({ ...prev, ...e }));

  return (
    <>
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-ocean-green-500 p-4 md:flex-row md:gap-2 md:rounded-full md:p-2">
        <input
          value={filter?.meaning || ""}
          onChange={({ target: { value } }) =>
            setFilterData({ meaning: value || undefined })
          }
          placeholder="Mengandung arti"
          className="w-full rounded-full bg-nami-field-900 py-2 px-3 text-xl text-white outline-none transition-all placeholder:text-white/50 focus:bg-nami-field-100 md:w-48"
        />
        <SelectFilter
          placeholder="Jenis Kelamin"
          data={list.gender}
          value={filter?.gender}
          onChange={(e) => setFilterData({ gender: e })}
        />
        <SelectFilter
          placeholder="Panjang Nama"
          data={list.wordLength}
          value={filter?.wordLength}
          onChange={(e) => setFilterData({ wordLength: e })}
        />
        <SelectFilter
          placeholder="Asal Nama"
          data={list.origin}
          value={filter?.origin}
          onChange={(e) => setFilterData({ origin: e })}
        />
        <button
          onClick={() => onSubmit(filter)}
          className="search-button btn text-bold relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-saffron-300 bg-saffron-300 px-4 py-2 text-xl font-bold text-black md:w-[5.5rem]"
        >
          <span className="search-icon absolute left-2.5 mr-1.5 inline-flex scale-0 items-center justify-center opacity-0 transition duration-300 ease-in-out">
            <BiSearch />
          </span>
          <span className="search-text relative left-0 inline-block">Cari</span>
        </button>
      </div>
    </>
  );
};

export default CustomFilter;

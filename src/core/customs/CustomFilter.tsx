import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { list } from "@nami/config";
import SelectFilter from "./SelectFilter";
import Button from "../Button";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ y: 50, scale: 0.5, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", delay: 1.6, duration: 0.8 }}
        className="relative flex flex-col items-center gap-2 rounded-3xl bg-greener-default p-2 inner-border-2 inner-border-greener-border md:flex-row md:gap-2 md:rounded-full md:p-3"
      >
        <div className="group relative">
          <input
            value={filter?.meaning || ""}
            onChange={({ target: { value } }) =>
              setFilterData({ meaning: value || undefined })
            }
            placeholder="Mengandung arti"
            className="w-full rounded-full bg-nami-field-default py-3 pl-4 pr-10 text-lg text-white caret-yellowish-default outline-none transition-all placeholder:text-white/70 hover:bg-nami-field-hover focus:bg-nami-field-hover focus:inner-border-[1px] focus:inner-border-nami-field-border md:w-52"
          />
          <button
            onClick={() => setFilterData({ meaning: undefined })}
            className="invisible absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 group-focus-within:first-of-type:visible group-hover:visible group-focus:visible"
          >
            <IoCloseCircle size={17} className="text-white" />
          </button>
        </div>
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
        <Button
          className="search-button flex items-center px-8 py-3"
          variant={"yellow"}
          onClick={() => onSubmit(filter)}
        >
          <span className="search-icon absolute left-3 mr-1.5 inline-flex scale-0 items-center justify-center opacity-0 transition duration-300 ease-in-out">
            <BiSearch size={24} />
          </span>
          <span className="search-text relative left-0 inline-block text-lg">
            Cari
          </span>
        </Button>
        {/* <button
          onClick={() => onSubmit(filter)}
          className="search-button btn text-bold relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-saffron-300 bg-saffron-300 px-4 py-2 text-xl font-bold text-black md:w-[5.5rem]"
        >
          <span className="search-icon absolute left-2.5 mr-1.5 inline-flex scale-0 items-center justify-center opacity-0 transition duration-300 ease-in-out">
            <BiSearch />
          </span>
          <span className="search-text relative left-0 inline-block">Cari</span>
        </button> */}
      </motion.div>
    </>
  );
};

export default CustomFilter;

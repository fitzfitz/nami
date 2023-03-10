import React, { useState } from "react";
import Select from "react-select";
import { BiSearch } from "react-icons/bi";
import { list } from "@nami/config";
import { BaseSelect } from "@nami/utils/types/base";

export interface FilterProps {
  meaning: string;
  gender: BaseSelect;
  wordLength: BaseSelect;
  origin: BaseSelect;
}

const initialFilter = {
  meaning: undefined,
  gender: undefined,
  wordLength: undefined,
  origin: undefined,
};

const Filter = () => {
  const [filter, setFilter] = useState<Partial<FilterProps>>(initialFilter);
  return (
    <>
      <div className="flex items-center gap-2 rounded-full bg-ocean-green-500 px-2 py-2">
        <input
          value={filter.meaning || ""}
          onChange={({ target: { value } }) =>
            setFilter((prev) => ({ ...prev, meaning: value ?? undefined }))
          }
          placeholder="Mengandung arti"
          className="w-48 rounded-full bg-nami-field-900 py-2 px-3 text-xl text-white outline-none transition-all placeholder:text-white/50 focus:bg-nami-field-100"
        />
        <Select
          className="w-44 text-xl"
          classNames={{
            control: ({ isFocused }) =>
              `${
                isFocused ? "!bg-nami-field-100" : "!bg-nami-field-900"
              } !border-0 !shadow-none !cursor-pointer !rounded-full`,
            placeholder: () => "!text-white/50",
            singleValue: () => "!text-white",
            clearIndicator: () => "!text-white",
            option: ({ isSelected }) =>
              `!bg-saffron-300 !cursor-pointer ${
                isSelected ? "!text-white" : "!text-black"
              }`,
            menu: () => "!bg-transparent !shadow-none",
            menuList: () => "!p-0 mt-2 !rounded-3xl",
          }}
          classNamePrefix="select"
          value={filter.gender}
          placeholder="Jenis Kelamin"
          name="color"
          options={list.gender}
          isClearable
          isSearchable={false}
          components={{
            DropdownIndicator: () => <></>,
            IndicatorSeparator: () => <></>,
          }}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              gender: e as BaseSelect,
            }))
          }
        />
        <Select
          className="w-44 text-xl"
          classNames={{
            control: ({ isFocused }) =>
              `${
                isFocused ? "!bg-nami-field-100" : "!bg-nami-field-900"
              } !border-0 !shadow-none !cursor-pointer !rounded-full`,
            placeholder: () => "!text-white/50",
            singleValue: () => "!text-white",
            clearIndicator: () => "!text-white",
            option: ({ isSelected }) =>
              `!bg-saffron-300 !cursor-pointer ${
                isSelected ? "!text-white" : "!text-black"
              }`,
            menu: () => "!bg-transparent !shadow-none",
            menuList: () => "!p-0 mt-2 !rounded-3xl",
          }}
          classNamePrefix="select"
          value={filter.wordLength}
          placeholder="Panjang Nama"
          name="color"
          options={list.wordLength}
          isClearable
          isSearchable={false}
          components={{
            DropdownIndicator: () => <></>,
            IndicatorSeparator: () => <></>,
          }}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              wordLength: e as BaseSelect,
            }))
          }
        />
        <Select
          className="w-44 text-xl"
          classNames={{
            control: ({ isFocused }) =>
              `${
                isFocused ? "!bg-nami-field-100" : "!bg-nami-field-900"
              } !border-0 !shadow-none !cursor-pointer !rounded-full`,
            placeholder: () => "!text-white/50",
            singleValue: () => "!text-white",
            clearIndicator: () => "!text-white",
            option: ({ isSelected }) =>
              `!bg-saffron-300 !cursor-pointer ${
                isSelected ? "!text-white" : "!text-black"
              }`,
            menu: () => "!bg-transparent !shadow-none",
            menuList: () => "!p-0 mt-2 !rounded-3xl",
          }}
          classNamePrefix="select"
          value={filter.origin}
          placeholder="Asal Nama"
          name="color"
          options={list.origin}
          isClearable
          isSearchable={false}
          components={{
            DropdownIndicator: () => <></>,
            IndicatorSeparator: () => <></>,
          }}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              origin: e as BaseSelect,
            }))
          }
        />
        {/* <Button rounded={"full"}>Jenis Kelamin</Button>
      <Button rounded={"full"}>Panjang Nama</Button>
      <Button rounded={"full"}>Asal Nama</Button> */}
        <button className="search-button btn text-bold relative inline-flex w-[5.5rem] items-center justify-center rounded-full border border-saffron-300 bg-saffron-300 px-4 py-2 text-xl font-bold text-black">
          <span className="search-icon">
            <BiSearch />
          </span>
          <span className="search-text">Cari</span>
        </button>
      </div>
      {"gender: " + filter.gender?.value}
    </>
  );
};

export default Filter;

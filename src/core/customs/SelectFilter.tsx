import React from "react";
import Select from "react-select";
import { BaseSelect } from "@nami/utils/types/base";

interface Props {
  placeholder?: string;
  onChange?: (newValue?: string | number) => void;
  data: BaseSelect[];
  value?: string | number;
  name?: string;
}

const SelectFilter = ({ placeholder, onChange, data, value, name }: Props) => {
  return (
    <Select
      className="w-full text-xl md:w-44"
      classNames={{
        control: ({ isFocused }) =>
          `${
            isFocused ? "!bg-nami-field-100" : "!bg-nami-field-900"
          } !border-0 !shadow-none !cursor-pointer !rounded-full`,
        placeholder: () => "!text-white/50",
        singleValue: () => "!text-white",
        clearIndicator: () => "!text-white",
        option: ({ isSelected }) =>
          `!cursor-pointer !py-4 !px-6 ${
            isSelected
              ? "!text-white !bg-saffron-400"
              : "!text-black !bg-saffron-300"
          }`,
        menu: () => "!bg-transparent !shadow-none",
        menuList: () => "!p-0 mt-2 !rounded-3xl",
      }}
      classNamePrefix="select"
      value={data.find((x) => x.value === value) || undefined}
      placeholder={placeholder ?? "Panjang Nama"}
      name={name || ""}
      options={data}
      isClearable
      isSearchable={false}
      components={{
        DropdownIndicator: () => <></>,
        IndicatorSeparator: () => <></>,
      }}
      onChange={(e) => onChange && onChange(e?.value)}
    />
  );
};

export default SelectFilter;

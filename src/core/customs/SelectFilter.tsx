import React from "react";
import Select, { components } from "react-select";
import { BaseSelect } from "@nami/utils/types/base";
import { AiOutlineCaretUp } from "react-icons/ai";
import { IoCloseCircle, IoCheckmarkCircle } from "react-icons/io5";

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
      menuPlacement="auto"
      className="border-[0 0 0, #000] relative w-full text-lg md:w-48"
      classNames={{
        container: () => ``,
        control: ({ isFocused, hasValue }) =>
          `flex items-center justify-between gap-1 pl-4 pr-2 py-3 bg-nami-field-default cursor-pointer rounded-full hover:bg-nami-field-hover
          ${
            isFocused &&
            "bg-nami-field-hover inner-border-[1px] inner-border-nami-field-border"
          } ${hasValue && ""}`,
        valueContainer: () => `flex items-center flex-1 w-0`,
        placeholder: () => "!text-white/70 !truncate",
        singleValue: () => "!text-white truncate",
        clearIndicator: () => "!text-white",
        option: () =>
          `cursor-pointer py-2 px-3 rounded-xl text-lg flex justify-between gap-2 hover:bg-yellowish-hover`,
        menu: () => "!bg-transparent",
        menuList: () =>
          "p-3 -my-1 rounded-3xl bg-yellowish-default inner-border-2 inner-border-yellowish-border-default flex flex-col gap-0.5",
        dropdownIndicator: () => "!p-1.5",
      }}
      styles={{
        control: () => ({
          // ...baseStyles,
          "&:hover .select__clear-indicator, &.select__control--is-focused .select__clear-indicator":
            {
              visibility: "visible",
            },
        }),
        valueContainer: () => ({
          // ...baseStyles,
          // paddingLeft: 15,
          // paddingRight: 5,
          // paddingTop: 12,
          // paddingBottom: 12,
          // margin: 0,
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          padding: 0,
          margin: 0,
        }),
        placeholder: (baseStyles) => ({
          ...baseStyles,
          padding: 0,
          margin: 0,
        }),
        clearIndicator: (baseStyles) => ({
          ...baseStyles,
          visibility: "hidden",
          padding: 0,
          margin: 0,
          transition: "all",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          boxShadow: "none",
        }),
        menuList: () => ({
          maxHeight: "300px",
          overflowY: "auto",
        }),
        option: () => ({}),
      }}
      classNamePrefix="select"
      value={data.find((x) => x.value === value) || undefined}
      placeholder={placeholder ?? "Panjang Nama"}
      name={name || ""}
      options={data}
      isClearable
      isSearchable={false}
      components={{
        DropdownIndicator: (props) => (
          <components.DropdownIndicator {...props}>
            <AiOutlineCaretUp
              size={13}
              className={`text-white ${
                // eslint-disable-next-line react/prop-types
                !props.selectProps.menuIsOpen && "rotate-180"
              } transition-all duration-[250ms]`}
            />
            {/* { ? (
            ) : (
              <AiOutlineCaretDown size={13} className="text-white" />
            )} */}
          </components.DropdownIndicator>
        ),
        Option: (props) => (
          <components.Option {...props}>
            {/* eslint-disable-next-line react/prop-types */}
            <span>{props.label}</span>
            {/* eslint-disable-next-line react/prop-types */}
            {props.isSelected ? (
              <IoCheckmarkCircle
                size={20}
                className="relative top-1 min-h-[18px] min-w-[18px]"
              />
            ) : null}
          </components.Option>
        ),
        ClearIndicator: (props) => (
          <components.ClearIndicator {...props}>
            <IoCloseCircle size={20} className="text-white" />
          </components.ClearIndicator>
        ),
        IndicatorSeparator: () => <></>,
      }}
      onChange={(e) => onChange && onChange(e?.value)}
    />
  );
};

export default SelectFilter;

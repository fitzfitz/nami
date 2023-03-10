import React, { useState } from "react";

export type DropdownClasses = {
  root?: string;
  button: string;
};

export type DropdownOptions = {
  label: string | number;
  value: any;
};

export type DropdownPosition = "left" | "right";

export interface DropdownProps {
  value?: string | number;
  options?: DropdownOptions[];
  placeholder?: string;
  onChange: (value: DropdownOptions) => void;
}

const Dropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select Data",
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const currentValue = options?.find((item) => item.value === value);

  const onClick = (value: DropdownOptions) => {
    onChange(value);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center rounded-md border border-gray-200 bg-white py-2 px-2 text-gray-700 hover:border-blue-600 focus:border-blue-600"
      >
        <span className="mr-1">{currentValue?.label ?? placeholder}</span>
        <span className="mx-1 h-5 w-[1px] bg-gray-200" />
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
        </svg>
      </button>
      <div
        className={`absolute top-12 right-0 ${
          open ? "block" : "hidden"
        } min-w-full overflow-hidden rounded-md border border-gray-200 transition-all`}
      >
        {options?.map((item) => (
          <div
            key={item.value}
            role={"button"}
            aria-hidden
            className="cursor-pointer bg-white p-2 hover:bg-gray-100"
            onClick={() => onClick && onClick(item)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;

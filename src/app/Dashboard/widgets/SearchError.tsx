import React from "react";
import { IoReload } from "react-icons/io5";

interface Props {
  show: boolean;
  refetch: () => void;
}

const SearchError = ({ show, refetch }: Props) => {
  return show ? (
    <button
      onClick={() => refetch()}
      className="flex h-full flex-1 items-center justify-center gap-3"
    >
      <IoReload size={18} />
      <span className="text-base">Error, muat ulang...</span>
    </button>
  ) : null;
};

export default SearchError;

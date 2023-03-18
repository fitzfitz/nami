import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

interface Props {
  show: boolean;
}

const InitialSearch = ({ show }: Props) => {
  return show ? (
    <div className="flex h-full flex-1 items-center justify-center gap-3">
      <BiLoaderAlt className="animate-spin" size={18} />
      <span className="text-base">Sedang meracik nama...</span>
    </div>
  ) : null;
};

export default InitialSearch;

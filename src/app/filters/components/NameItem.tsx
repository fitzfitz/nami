import React from "react";
import { RxShare1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { Names } from "@nami/app/Dashboard";

interface Props {
  id: string;
  newIndex?: number;
  name: string;
  meaning: string;
  onShare?: (id: string | null) => void;
  onClick?: (name: Names) => void;
}

const NameItem = ({
  id,
  name,
  meaning,
  newIndex = 0,
  onShare,
  onClick,
}: Props) => {
  return (
    <motion.div
      initial={{ x: -70, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: newIndex / 20 }}
      className="flex w-full max-w-sm cursor-pointer items-center overflow-hidden rounded-xl px-5 py-3 hover:bg-[#F9EAE7]"
      onClick={() => onClick && onClick({ id, name, meaning, newIndex })}
    >
      <div className="flex w-0 flex-1 flex-col pr-6">
        <span
          className="truncate text-xl font-bold leading-[1.875rem]"
          title={name}
        >
          {name}
        </span>
        <span className="truncate text-sm text-[#687178]" title={meaning}>
          {meaning}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onShare && onShare(id);
          }}
        >
          <RxShare1 className="text-[#F7AFA7]" size={24} />
        </button>
      </div>
    </motion.div>
  );
};

export default NameItem;

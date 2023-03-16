import { Button } from "@nami/core";
import React, { useState } from "react";
import NameItem from "../components/NameItem";
import { motion } from "framer-motion";
import ModalShare from "../components/ModalShare";
import { BiLoaderAlt } from "react-icons/bi";

interface Props {
  data?: { id: string; name: string; meaning: string; newIndex: number }[];
  isLoadMore: boolean;
  onMore?: () => void;
}

const SearchResult = ({ data, isLoadMore, onMore }: Props) => {
  const [share, setShare] = useState<string | null>(null);

  return (
    <>
      <div className="flex w-full max-w-[23.5rem] flex-col items-center">
        {data?.map((name) => (
          <NameItem
            key={name.id}
            id={name.id}
            newIndex={name.newIndex}
            name={name.name}
            meaning={name.meaning}
            onShare={(id) => setShare(id)}
          />
        ))}
        {!isLoadMore ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex w-full justify-center gap-[0.625rem] p-[0.625rem]"
          >
            <Button onClick={() => onMore && onMore()} className="truncate">
              Lihat nama lainnya
            </Button>
          </motion.div>
        ) : null}
        {isLoadMore ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex w-full justify-center gap-[0.625rem] p-[0.625rem]"
          >
            <div className="flex h-full flex-1 items-center justify-center gap-3 py-2.5">
              <BiLoaderAlt className="animate-spin" size={18} />
              <span className="text-base">Memuat nama lainnya...</span>
            </div>
          </motion.div>
        ) : null}
      </div>
      <ModalShare open={!!share} onClose={() => setShare(null)} />
    </>
  );
};

export default SearchResult;

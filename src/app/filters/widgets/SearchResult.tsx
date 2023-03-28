import { Button } from "@nami/core";
import React, { useState } from "react";
import NameItem from "../components/NameItem";
import { AnimatePresence, motion } from "framer-motion";
import ModalShare from "../components/ModalShare";
import { BiLoaderAlt } from "react-icons/bi";
import { IoReload } from "react-icons/io5";
import DetailDialog from "@nami/app/Dashboard/components/DetailDialog";
import useDashboardStore from "@nami/app/Dashboard/store";

interface Props {
  data?: { id: string; name: string; meaning: string; newIndex: number }[];
  isLoadMore: boolean;
  isError: boolean;
  onMore?: () => void;
  refetch?: () => void;
}

const SearchResult = ({
  data,
  isLoadMore,
  isError,
  onMore,
  refetch,
}: Props) => {
  const [share, setShare] = useState<string | null>(null);
  const { detail, setDetail } = useDashboardStore();
  return (
    <>
      <div className="flex w-[23.5rem] flex-col items-center">
        {data?.map((name) => (
          <NameItem
            key={name.id}
            id={name.id}
            newIndex={name.newIndex}
            name={name.name}
            meaning={name.meaning}
            onShare={(id) => setShare(id)}
            onClick={(name) => setDetail(name)}
          />
        ))}
        <div className="relative h-16 w-full p-[0.625rem]">
          <AnimatePresence>
            {!isError && !isLoadMore ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute flex w-full justify-center gap-[0.625rem]"
              >
                <Button onClick={() => onMore && onMore()} className="truncate">
                  Lihat nama lainnya
                </Button>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <AnimatePresence>
            {isLoadMore ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute flex w-full justify-center gap-[0.625rem]"
              >
                <div className="flex h-full flex-1 items-center justify-center gap-3 py-2.5">
                  <BiLoaderAlt className="animate-spin" size={18} />
                  <span className="text-base">Memuat nama lainnya...</span>
                </div>
              </motion.div>
            ) : null}
            {!isLoadMore && isError ? (
              <motion.div
                onClick={refetch}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute flex w-full cursor-pointer justify-center gap-[0.625rem]"
              >
                <div className="flex h-full flex-1 items-center justify-center gap-3 py-2.5">
                  <IoReload size={18} />
                  <span className="text-base">Error, muat ulang...</span>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      <ModalShare open={!!share} onClose={() => setShare(null)} />
      <DetailDialog open={!!detail} data={detail} onClose={() => setDetail()} />
    </>
  );
};

export default SearchResult;

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchResult from "@nami/app/filters/widgets/SearchResult";
import { Names } from "../../filters/types";

interface Props {
  show: boolean;
  data: Names[];
  isLoadMore: boolean;
  fetchNextPage: () => void;
}

const Results = ({ show, data, isLoadMore, fetchNextPage }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <div className="flex w-full flex-col items-center gap-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            exit={{
              opacity: 0,
              transition: { delay: 0 },
            }}
            className="text-center font-rammetto text-lg font-bold md:text-2xl md:leading-[2.5625rem]"
          >
            Menampilkan hasil
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            exit={{
              opacity: 0,
              transition: { delay: 0 },
            }}
          >
            <SearchResult
              data={data}
              isLoadMore={isLoadMore}
              onMore={fetchNextPage}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Results;

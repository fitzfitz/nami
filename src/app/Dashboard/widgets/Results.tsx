import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchResult from "@nami/app/filters/widgets/SearchResult";
import { Names } from "../../filters/types";

interface Props {
  show: boolean;
  data: Names[];
  isLoadMore: boolean;
  isError: boolean;
  fetchNextPage: () => void;
  refetch: () => void;
}

const Results = ({
  show,
  data,
  isLoadMore,
  isError,
  fetchNextPage,
  refetch,
}: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -200, width: 0 }}
          animate={{ opacity: 1, x: 0, width: "100%" }}
          transition={{ type: "spring", duration: 0.5, delay: 0.85 }}
          exit={{
            opacity: 0,
            x: 200,
            width: 0,
            transition: { delay: 0.3 },
          }}
          className="flex w-full flex-col items-center gap-5"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2, delay: 0 },
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
              transition: { duration: 0.2, delay: 0 },
            }}
          >
            <SearchResult
              data={data}
              isLoadMore={isLoadMore}
              isError={isError}
              onMore={fetchNextPage}
              refetch={refetch}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Results;

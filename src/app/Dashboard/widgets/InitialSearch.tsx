import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiLoaderAlt } from "react-icons/bi";

interface Props {
  show?: boolean;
  isFiltered?: boolean;
}

const InitialSearch = ({ show, isFiltered }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={
            !isFiltered
              ? {
                  flex: 0,
                  height: 200,
                  opacity: 0,
                  top: 0,
                }
              : {
                  opacity: 0,
                }
          }
          animate={
            !isFiltered
              ? {
                  flex: 1,
                  height: "100%",
                  opacity: 1,
                }
              : {
                  opacity: 1,
                }
          }
          transition={{ type: "spring", delay: 0.2, duration: 0.8 }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0,
              duration: 0.3,
            },
          }}
          className="flex h-full items-center justify-center gap-3"
        >
          <BiLoaderAlt className="animate-spin" size={18} />
          <span className="text-base">Sedang meracik nama...</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialSearch;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  show: boolean;
}

const Welcome = ({ show }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 30, scale: 0.5, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 1,
            duration: 0.8,
          }}
          exit={{
            position: "fixed",
            opacity: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
          className="mb-2 text-center font-rammetto text-2xl font-bold leading-[5.125rem] tracking-tight md:text-[3.375rem] "
        >
          <div className="whitespace-pre-wrap">
            <span className="text-black">Cari</span>{" "}
            <span className="text-ocean-green-500">inspirasi nama</span>
          </div>
          <div>
            <span className="text-black">jadi</span>{" "}
            <span className="text-saffron-300">lebih mudah!</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;

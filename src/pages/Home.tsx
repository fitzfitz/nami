import React from "react";
import { CustomFilter } from "@nami/core/customs";
import { useNavigate } from "react-router-dom";
import { cleanObjects } from "@fitzzz/utils";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="mb-2 text-center font-rammetto text-2xl font-bold leading-[5.125rem] tracking-tight md:text-[3.375rem] ">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          animate={{ opacity: 1, x: 0 }}
          className="whitespace-pre-wrap"
        >
          <span className="text-black">Cari</span>{" "}
          <span className="text-ocean-green-500">inspirasi nama</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-black">jadi</span>{" "}
          <span className="text-saffron-300">lebih mudah!</span>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <CustomFilter
          onSubmit={(data) => {
            cleanObjects(data, { nullIfEmpty: true })
              ? navigate(`/filter?filter=${JSON.stringify(cleanObjects(data))}`)
              : undefined;
          }}
        />
      </motion.div>
    </div>
  );
};

export default Home;

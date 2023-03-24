import React from "react";
import imgBushRight from "@nami/assets/images/svg/bush-right.svg";
import imgBushLeft from "@nami/assets/images/svg/bush-left.svg";
import { motion } from "framer-motion";

const AppFooter = () => {
  return (
    <div className="relative">
      <motion.footer
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-10 bg-[url('/assets/images/floor.png')] bg-cover bg-top p-6 text-center text-xs text-rose-bud sm:px-8"
      >
        Made nami with ❤️ for all parents
      </motion.footer>
      <motion.img
        initial={{ x: 500, position: "absolute" }}
        animate={{ x: 20 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
        src={imgBushRight}
        alt=""
        className="absolute -right-10 bottom-10 -z-10 w-48 md:right-0 md:bottom-0 md:w-60"
      />
      <motion.img
        initial={{ x: -500, position: "absolute" }}
        animate={{ x: -20 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
        src={imgBushLeft}
        alt=""
        className="absolute -left-5 bottom-10 -z-10 w-32 md:left-0 md:bottom-0 md:w-64"
      />
    </div>
  );
};

export default AppFooter;

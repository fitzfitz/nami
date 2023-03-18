import React from "react";
import imgBushRight from "@nami/assets/images/svg/bush-right.svg";
import imgBushLeft from "@nami/assets/images/svg/bush-left.svg";
import { motion } from "framer-motion";

const AppFooter = () => {
  return (
    <div className="relative">
      <motion.footer
        initial={{ translateY: "300%" }}
        animate={{ translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mt-10 bg-[url('/assets/images/floor.png')] bg-cover bg-top p-6 text-center text-xs text-rose-bud sm:px-8"
      >
        Made nami with ❤️ for all parents
      </motion.footer>
      <motion.img
        initial={{ right: "-300%", position: "absolute" }}
        animate={{ right: 0 }}
        transition={{ duration: 0.5 }}
        src={imgBushRight}
        alt=""
        className="absolute -right-10 bottom-10 -z-10 w-48 md:right-0 md:bottom-0 md:w-60"
      />
      <motion.img
        initial={{ left: "-300%", position: "absolute" }}
        animate={{ left: 0 }}
        transition={{ duration: 0.5 }}
        src={imgBushLeft}
        alt=""
        className="absolute -left-5 bottom-10 -z-10 w-32 md:left-0 md:bottom-0 md:w-64"
      />
    </div>
  );
};

export default AppFooter;

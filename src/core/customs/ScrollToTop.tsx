import React, { useEffect, useState } from "react";
import { CgArrowUpO } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

const scrollVariants = {
  initial: { y: ".5rem", opacity: 0 },
  animate: {
    y: "0rem",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    const doc = document?.getElementById("container");
    doc &&
      doc.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    const doc = document?.getElementById("container");
    if (doc) {
      const toggleVisibility = () => {
        if (doc.scrollTop > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      doc?.addEventListener("scroll", toggleVisibility);
    }
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-[10%] right-[3%] rounded-full bg-yellowish-default p-3 inner-border-2 inner-border-yellowish-border-default"
          onClick={scrollToTop}
          variants={scrollVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <CgArrowUpO size={32} className="p-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
export default ScrollToTop;

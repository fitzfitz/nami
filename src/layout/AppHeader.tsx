import React, { useState } from "react";
import { Button, Popover } from "@nami/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { app } from "@nami/config";
import logo from "@nami/assets/images/svg/logo.svg";
import { MenuButton } from "@nami/core/customs/MenuButton";

const AppHeader = () => {
  const [menu, setMenu] = useState<Element | null>(null);
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 flex h-[4.5rem] min-h-[4.5rem] items-center justify-between overflow-hidden bg-soft-cream px-3.5 font-bold sm:px-8"
    >
      <motion.div
      // initial={{ x: -30, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ type: "spring", bounce: 0.5 }}
      >
        <Link to={"/"} className="flex items-center">
          <span className="flex items-center self-center whitespace-nowrap font-rammetto text-xl font-semibold text-gray-700">
            <img alt="" src={logo} height={43} />
          </span>
        </Link>
      </motion.div>
      <div className="flex gap-3">
        <motion.div
        // initial={{ x: 50, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ type: "spring", bounce: 0.5, delay: 0.25 }}
        >
          <Button variant="yellow" rounded={"full"}>
            Donasi
          </Button>
        </motion.div>
        <motion.div
        // initial={{ x: 50, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
        >
          <Button variant="green" rounded={"full"}>
            Kritik & Saran
          </Button>
        </motion.div>
        <motion.div
        // initial={{ x: 50, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ type: "spring", bounce: 0.5, delay: 0.35 }}
        >
          <Button
            variant="green"
            onClick={(e) => setMenu(e.currentTarget)}
            rounded={"full"}
          >
            <MenuButton
              isOpen={!!menu}
              strokeWidth="2"
              color="#FFF"
              lineProps={{ strokeLinecap: "round" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              width="24"
              height="24"
            />
          </Button>
        </motion.div>
      </div>
      <Popover
        anchorRef={menu}
        placement="bottom-end"
        onClose={() => setMenu(null)}
      >
        <div className="flex w-[28rem] animate-unloved flex-col gap-3 rounded-3xl border-2 border-bluish-lighter bg-bluish-default p-5 text-white">
          <span className="text-2xl font-bold">Siapa nami?</span>
          <span className="text-base">{app.about}</span>
          <div className="flex flex-col rounded-xl bg-bluish-lighter p-4">
            <span className="text-2xl font-bold">Hubungi kami</span>
            <a
              onClick={() => setMenu(null)}
              className="text-base hover:underline"
              href={`mailto:${app.email}`}
            >
              {app.email}
            </a>
          </div>
        </div>
      </Popover>
    </motion.header>
  );
};

export default AppHeader;

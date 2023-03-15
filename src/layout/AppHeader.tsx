import React, { useState } from "react";
import { Button, Popover } from "@nami/core";
import { Link } from "react-router-dom";
import logo from "@nami/assets/images/svg/logo.svg";
import { app } from "@nami/config";

const AppHeader = () => {
  const [menu, setMenu] = useState<Element | null>(null);
  return (
    <header className="sticky top-0 flex h-[4.5rem] min-h-[4rem] items-center justify-between bg-soft-cream px-3.5 font-bold sm:px-8">
      <Link to={"/"} className="flex items-center">
        <span className="flex items-center self-center whitespace-nowrap font-rammetto text-xl font-semibold text-gray-700">
          <img alt="" src={logo} height={43} />
        </span>
      </Link>
      <div className="flex gap-4">
        <Button variant="yellow" rounded={"full"}>
          Donasi
        </Button>
        <Button variant="green" rounded={"full"}>
          Kritik & Saran
        </Button>
        <Button
          variant="green"
          onClick={(e) => setMenu(e.currentTarget)}
          rounded={"full"}
        >
          <div className={`hamburger -my-1 ${menu ? "is-active" : ""}`}>
            <span className="line mx-auto my-1 block h-0.5 w-5 bg-white transition"></span>
            <span className="line mx-auto my-1 block h-0.5 w-5 bg-white transition"></span>
            <span className="line mx-auto my-1 block h-0.5 w-5 bg-white transition"></span>
          </div>
        </Button>
      </div>
      <Popover
        anchorRef={menu}
        overlay
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
    </header>
  );
};

export default AppHeader;

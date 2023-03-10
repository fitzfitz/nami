import React, { useState } from "react";
import { Button, Popover } from "@nami/core";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const AppHeader = () => {
  const [menu, setMenu] = useState<Element | null>(null);
  return (
    <header className="flex h-16 items-center justify-between bg-soft-cream px-3.5 font-bold sm:px-8">
      <Link to={"/"} className="flex items-center">
        <span className="flex items-center self-center whitespace-nowrap font-rammetto text-xl font-semibold text-gray-700">
          NAMIKAZE
        </span>
      </Link>
      <div className="flex gap-4">
        <Button rounded={"full"}>Donasi</Button>
        <Button onClick={(e) => setMenu(e.currentTarget)} rounded={"full"}>
          <RxHamburgerMenu fontSize={20} />
        </Button>
      </div>
      <Popover
        anchorRef={menu}
        overlay
        placement="bottom-end"
        onClose={() => setMenu(null)}
      >
        <div className="w-80 p-3">Popover</div>
      </Popover>
    </header>
  );
};

export default AppHeader;

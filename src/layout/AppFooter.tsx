import React from "react";
import imgBushRight from "@nami/assets/images/png/bush-right.png";
import imgBushLeft from "@nami/assets/images/png/bush-left.png";

const AppFooter = () => {
  return (
    <footer className="relative bg-[url('/assets/images/floor.png')] bg-cover bg-top p-6 text-center text-rose-bud sm:px-8">
      Made nami with ❤️ for all parents
      <img
        src={imgBushRight}
        alt=""
        className="absolute -right-10 bottom-12 -z-10 w-48 md:right-0 md:bottom-0 md:w-96"
      />
      <img
        src={imgBushLeft}
        alt=""
        className="absolute -left-5 bottom-12 -z-10 w-32 md:left-0 md:bottom-0 md:w-72"
      />
    </footer>
  );
};

export default AppFooter;

import React from "react";
import { Filter } from "@nami/core/customs";

const Home = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="mb-2 text-center font-rammetto text-2xl font-bold !leading-snug md:text-5xl ">
        <div className="whitespace-pre-wrap">
          <span className="text-black">Cari</span>{" "}
          <span className="text-ocean-green-500">inspirasi nama</span>
        </div>
        <div>
          <span className="text-black">jadi</span>{" "}
          <span className="text-saffron-300">lebih mudah!</span>
        </div>
      </div>
      <Filter />
    </div>
  );
};

export default Home;

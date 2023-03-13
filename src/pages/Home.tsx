import React from "react";
import { CustomFilter } from "@nami/core/customs";
import { useNavigate } from "react-router-dom";
import { cleanObjects } from "@fitzzz/utils";

const Home = () => {
  const navigate = useNavigate();
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
      <CustomFilter
        onSubmit={(data) => {
          cleanObjects(data, { nullIfEmpty: true })
            ? navigate(`/filter?filter=${JSON.stringify(cleanObjects(data))}`)
            : undefined;
        }}
      />
    </div>
  );
};

export default Home;

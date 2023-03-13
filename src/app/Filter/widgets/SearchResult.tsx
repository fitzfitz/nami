import React, { useState } from "react";
import NameItem from "../components/NameItem";

const SearchResult = () => {
  const [loved, setLoved] = useState<number | null>();
  return (
    <div className="flex w-full flex-col items-center">
      <NameItem
        id={1}
        name="Abizar bahi"
        meaning="Sang pemersatu bangsa"
        onLoved={(id) => setLoved(id)}
        isLoved={loved === 1}
      />
      <NameItem
        id={2}
        name="Abizar bahi"
        meaning="Sang pemersatu bangsa"
        onLoved={(id) => setLoved(id)}
        isLoved={loved === 2}
      />
      <NameItem
        id={3}
        name="Abizar bahi"
        meaning="Sang pemersatu bangsa"
        onLoved={(id) => setLoved(id)}
        isLoved={loved === 3}
      />
      <NameItem
        id={4}
        name="Abizar bahi"
        meaning="Sang pemersatu bangsa"
        onLoved={(id) => setLoved(id)}
        isLoved={loved === 4}
      />
      <NameItem
        id={5}
        name="Abizar bahi"
        meaning="Sang pemersatu bangsa"
        onLoved={(id) => setLoved(id)}
        isLoved={loved === 5}
      />
    </div>
  );
};

export default SearchResult;

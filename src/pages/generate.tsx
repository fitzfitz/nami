import React, { useState } from "react";
import axios from "axios";

function Generate() {
  const [names, setNames] = useState<any>([]);

  const generateNames = async (numNames: number) => {
    const prompt = `Generate ${numNames} names and meanings`;
    const response = await axios.post(
      "http://localhost:5000/ask-fitz/generate-names",
      { prompt, numNames },
    );
    console.log(response.data);
    setNames(names.concat(response.data));
  };

  const handleLoadMore = () => {
    generateNames(5);
  };

  return (
    <div>
      <ul>
        {names.map((name: any, index: number) => (
          <li key={index}>
            {name.name}. {name.meaning}
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load more</button>
    </div>
  );
}

export default Generate;

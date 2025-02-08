import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"; // For solid icons
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length) {
      console.log("enter");

      navigate("/search");
    }
  };

  return (
    <div className="flex-grow">
      <div className="relative w-[282px] ml-2">
        {/* Input field with padding for the icon */}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 rounded-full pt-[5px] pb-[5px] pl-[10px] pr-[10px] h-[33px] w-full pl-[35px]" // Added left padding for the icon
          placeholder="Search..."
        />

        {/* Magnifying glass icon */}
        <MagnifyingGlassIcon className="absolute left-3 top-[27px] transform -translate-y-1/2 text-gray-500 w-5 h-5" />
      </div>
    </div>
  );
};

export default Search;

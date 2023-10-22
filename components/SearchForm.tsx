"use client";

import { useState } from "react";
import { SearchFormProps } from "@/types"

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 border-b-[1px] border-b-[#f1f3f5] pb-8 mt-10"
    >
      <input
        className="bg-[#edf2ff] outline-[#5c7cfa] max-w-4xl w-full px-5 py-3"
        type="text"
        placeholder="Enter a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-[#5c7cfa] text-[#f8f9fa] font-bold rounded-md px-4 py-2"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;

import React from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

interface SortToggleProps {
  sortLatest: boolean;
  toggleSort: () => void;
}

const SortToggle: React.FC<SortToggleProps> = ({ sortLatest, toggleSort }) => {
  return (
    <button
      onClick={toggleSort}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200
        ${sortLatest ? "bg-blue-500 text-white border-blue-500" : "bg-white text-gray-700 border-gray-300"}
        hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      <span className="font-medium">{sortLatest ? "Latest" : "Oldest"}</span>
      {sortLatest ? <FiArrowDown /> : <FiArrowUp />}
    </button>
  );
};

export default SortToggle;

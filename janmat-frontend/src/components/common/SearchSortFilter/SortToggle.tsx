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
        ${sortLatest
          ? "bg-blue-600/80 text-white border-blue-500 hover:bg-blue-500"
          : "bg-white/10 text-gray-200 border-white/20 hover:bg-white/20"}
        backdrop-blur-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50`}
    >
      <span className="font-medium">{sortLatest ? "Latest" : "Oldest"}</span>
      {sortLatest ? <FiArrowDown /> : <FiArrowUp />}
    </button>
  );
};

export default SortToggle;

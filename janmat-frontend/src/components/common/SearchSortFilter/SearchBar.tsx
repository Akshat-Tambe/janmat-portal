import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  return (
    <div className="relative w-64">
      {/* Search Icon */}
      <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />

      {/* Input Field */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-10 py-2 w-full rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/20
                   text-white placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500/50 
                   transition-all duration-200"
      />

      {/* Clear Button */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 
                     text-gray-400 hover:text-gray-200 transition-colors"
        >
          <FiX />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

import React from "react";

interface StatusFilterProps {
  selectedStatuses: string[];
  toggleStatus: (status: string) => void;
}

const statuses = ["Upcoming", "Ongoing", "Ended"];

const StatusFilter: React.FC<StatusFilterProps> = ({ selectedStatuses, toggleStatus }) => {
  return (
    <div className="flex gap-2">
      {statuses.map((status) => {
        const isSelected = selectedStatuses.includes(status);

        // Status-based active colors
        const activeStyles =
          status === "Upcoming"
            ? "bg-green-600/80 border-green-500 text-white hover:bg-green-500"
            : status === "Ongoing"
              ? "bg-yellow-500/80 border-yellow-400 text-black hover:bg-yellow-400"
              : "bg-red-600/80 border-red-500 text-white hover:bg-red-500";

        return (
          <button
            key={status}
            onClick={() => toggleStatus(status)}
            className={`px-4 py-1.5 rounded-full font-medium border backdrop-blur-md transition-all duration-200
              ${isSelected
                ? activeStyles
                : "bg-white/10 border-white/20 text-gray-200 hover:bg-white/20"
              }`}
          >
            {status}
          </button>
        );
      })}
    </div>
  );
};

export default StatusFilter;

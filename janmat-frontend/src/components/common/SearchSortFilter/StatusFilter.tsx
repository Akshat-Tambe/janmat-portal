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
        const bgColor =
          status === "Upcoming"
            ? "bg-green-500"
            : status === "Ongoing"
            ? "bg-yellow-500"
            : "bg-red-500";

        return (
          <button
            key={status}
            onClick={() => toggleStatus(status)}
            className={`px-3 py-1 rounded-full font-medium transition-all duration-200
              ${isSelected ? `${bgColor} text-white shadow-md` : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {status}
          </button>
        );
      })}
    </div>
  );
};

export default StatusFilter;

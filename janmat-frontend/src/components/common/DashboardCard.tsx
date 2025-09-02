// src/components/common/DashboardCard.tsx
import React from "react";

interface DashboardCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  color?: string; // Tailwind color class e.g. bg-primary
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  color = "bg-primary",
}) => {
  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-card ${color} text-white transform transition-transform duration-300 hover:scale-105`}
    >
      {icon && <div className="text-3xl mr-4">{icon}</div>}
      <div>
        <h3 className="text-sm">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;

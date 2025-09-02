// src/pages/admin/Dashboard.tsx
import React from "react";
import DashboardCard from "../../components/common/DashboardCard";
import { FaVoteYea, FaUsers, FaFileAlt } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { title: "Total Elections", value: 5, icon: <FaFileAlt /> },
    { title: "Total Candidates", value: 20, icon: <FaUsers />, color: "bg-secondary" },
    { title: "Total Voters", value: 120, icon: <FaVoteYea />, color: "bg-accent" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <DashboardCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default Dashboard;

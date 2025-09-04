// src/pages/admin/Dashboard.tsx
import ElectionPieChart from "../../components/charts/ElectionPieCharts";
import VoterBarChart from "../../components/charts/VoterBarChart";
import TrendLineChart from "../../components/charts/TrendLineChart";

const Dashboard = () => {
  const electionData = [
    { name: "Upcoming", value: 3 },
    { name: "Ongoing", value: 1 },
    { name: "Ended", value: 5 },
  ];

  const voterData = [
    { name: "Election 1", voters: 1200 },
    { name: "Election 2", voters: 900 },
    { name: "Election 3", voters: 1500 },
  ];

  const trendData = [
    { month: "Jan", elections: 2 },
    { month: "Feb", elections: 1 },
    { month: "Mar", elections: 3 },
    { month: "Apr", elections: 2 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ElectionPieChart data={electionData} />
      <VoterBarChart data={voterData} />
      <TrendLineChart data={trendData} />
    </div>
  );
};

export default Dashboard;

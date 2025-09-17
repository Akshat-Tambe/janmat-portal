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
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Election Status */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">Election Status</h2>
          <ElectionPieChart data={electionData} />
        </div>

        {/* Voter Participation */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">Voter Participation</h2>
          <VoterBarChart data={voterData} />
        </div>

        {/* Trends */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-white/20 md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold text-white mb-4">Election Trends</h2>
          <TrendLineChart data={trendData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import ElectionPieChart from "../../components/charts/ElectionPieCharts";
import TrendLineChart from "../../components/charts/TrendLineChart";
import VoterBarChart from "../../components/charts/VoterBarChart";

const Results: React.FC = () => {
  const electionResults = [
    { name: "John Doe", value: 123 },
    { name: "Jane Smith", value: 98 },
    { name: "Alex Johnson", value: 76 },
    { name: "Emily Davis", value: 54 },
  ];

  const voterParticipation = [
    { name: "Election 1", voters: 500 },
    { name: "Election 2", voters: 750 },
    { name: "Election 3", voters: 620 },
    { name: "Election 4", voters: 890 },
  ];

  const electionTrends = [
    { month: "Jan", elections: 2 },
    { month: "Feb", elections: 3 },
    { month: "Mar", elections: 1 },
    { month: "Apr", elections: 4 },
    { month: "May", elections: 2 },
    { month: "Jun", elections: 5 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-8">📊 Election Results</h1>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            Candidate Votes
          </h2>
          <ElectionPieChart data={electionResults} />
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-white/20">
          <h2 className="text-xl font-semibold text-white mb-4">
            Voter Participation
          </h2>
          <VoterBarChart data={voterParticipation} />
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 border border-white/20 md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold text-white mb-4">
            Election Trends
          </h2>
          <TrendLineChart data={electionTrends} />
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 mt-8">
        <h2 className="text-2xl font-semibold text-white mb-6">
          🗳️ Candidate Results
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-white">
            <thead>
              <tr className="bg-white/20">
                <th className="p-3 text-left font-semibold">Candidate</th>
                <th className="p-3 text-left font-semibold">Party</th>
                <th className="p-3 text-left font-semibold">Votes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/20">
              <tr className="hover:bg-white/10 transition">
                <td className="p-3">John Doe</td>
                <td className="p-3 text-gray-300">Party A</td>
                <td className="p-3 font-semibold text-blue-400">123</td>
              </tr>
              <tr className="hover:bg-white/10 transition">
                <td className="p-3">Jane Smith</td>
                <td className="p-3 text-gray-300">Party B</td>
                <td className="p-3 font-semibold text-pink-400">98</td>
              </tr>
              <tr className="hover:bg-white/10 transition">
                <td className="p-3">Alex Johnson</td>
                <td className="p-3 text-gray-300">Party C</td>
                <td className="p-3 font-semibold text-green-400">76</td>
              </tr>
              <tr className="hover:bg-white/10 transition">
                <td className="p-3">Emily Davis</td>
                <td className="p-3 text-gray-300">Party D</td>
                <td className="p-3 font-semibold text-yellow-400">54</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;

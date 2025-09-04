import React from "react";
import ElectionPieChart from "../../components/charts/ElectionPieCharts";
import TrendLineChart from "../../components/charts/TrendLineChart";
import VoterBarChart from "../../components/charts/VoterBarChart";

const Results: React.FC = () => {
  // ✅ Static data for now (replace later with API)
  const electionResults = [
    { name: "John Doe", value: 123 }, // Pie chart needs {name, value}
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
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">📊 Election Results</h1>

      {/* Grid for charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ElectionPieChart data={electionResults} />
        <VoterBarChart data={voterParticipation} />
        <TrendLineChart data={electionTrends} />
      </div>

      {/* Results Table */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">🗳️ Candidate Results</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Candidate</th>
              <th className="p-3 border">Party</th>
              <th className="p-3 border">Votes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">John Doe</td>
              <td className="p-3 border">Party A</td>
              <td className="p-3 border">123</td>
            </tr>
            <tr>
              <td className="p-3 border">Jane Smith</td>
              <td className="p-3 border">Party B</td>
              <td className="p-3 border">98</td>
            </tr>
            <tr>
              <td className="p-3 border">Alex Johnson</td>
              <td className="p-3 border">Party C</td>
              <td className="p-3 border">76</td>
            </tr>
            <tr>
              <td className="p-3 border">Emily Davis</td>
              <td className="p-3 border">Party D</td>
              <td className="p-3 border">54</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;

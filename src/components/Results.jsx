import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Results({ electionId, goBack }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Dummy result data with images
    const dummyResults = {
      1: [
        { id: 101, name: "John Doe", party: "Party A", votes: 120, photo: "https://randomuser.me/api/portraits/men/1.jpg", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Party_icon_red.svg" },
        { id: 102, name: "Jane Smith", party: "Party B", votes: 95, photo: "https://randomuser.me/api/portraits/women/2.jpg", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Party_icon_blue.svg" }
      ],
      3: [
        { id: 301, name: "Mike Johnson", party: "Party C", votes: 300, photo: "https://randomuser.me/api/portraits/men/5.jpg", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Party_icon_green.svg" },
        { id: 302, name: "Emily Davis", party: "Party D", votes: 275, photo: "https://randomuser.me/api/portraits/women/6.jpg", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Party_icon_yellow.svg" }
      ]
    };
    setResults(dummyResults[electionId] || []);
  }, [electionId]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <button onClick={goBack} className="mb-4 px-4 py-2 bg-gray-700 rounded-lg">
        ← Back to Elections
      </button>
      <h1 className="text-3xl font-bold mb-6">Election Results</h1>

      {results.length === 0 ? (
        <p>No results available for this election.</p>
      ) : (
        <>
          {/* Candidates List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {results.map((candidate) => (
              <div key={candidate.id} className="bg-white/10 p-4 rounded-lg shadow-lg text-center">
                <img src={candidate.photo} alt={candidate.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500" />
                <h2 className="text-xl font-bold">{candidate.name}</h2>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <img src={candidate.logo} alt={candidate.party} className="w-6 h-6" />
                  <span className="text-white/70">{candidate.party}</span>
                </div>
                <p className="mt-2 text-lg font-semibold">Votes: {candidate.votes}</p>
              </div>
            ))}
          </div>

          {/* Bar Chart */}
          <div className="bg-white/10 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Vote Count Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={results}>
                <CartesianGrid strokeDasharray="3 3" stroke="#8884d8" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#333", borderRadius: "8px", border: "none" }}
                  labelStyle={{ color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Bar dataKey="votes" fill="#8884d8" barSize={50} radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}

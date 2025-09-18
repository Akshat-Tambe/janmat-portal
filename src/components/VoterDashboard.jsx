import React, { useState, useEffect } from "react";
import { Vote } from "lucide-react";
import CandidatesList from "./CandidatesList";
import Results from "./Results";

export default function VoterDashboard() {
  const [elections, setElections] = useState([]);
  const [selectedElectionId, setSelectedElectionId] = useState(null);
  const [view, setView] = useState("elections");

  useEffect(() => {
    // Dummy elections data with status
    setElections([
      { id: 1, name: "Presidential Election", startDate: "2025-08-10", endDate: "2025-08-20", status: "ACTIVE" },
      { id: 2, name: "Student Council Election", startDate: "2025-09-01", endDate: "2025-09-05", status: "UPCOMING" },
      { id: 3, name: "City Mayor Election", startDate: "2025-07-01", endDate: "2025-07-05", status: "CLOSED" }
    ]);
  }, []);

  const renderElectionCard = (election) => {
    return (
      <div
        key={election.id}
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 text-white"
      >
        <h2 className="text-2xl font-bold mb-2">{election.name}</h2>
        <p className="text-white/80 mb-4">
          🗓 {election.startDate} ➜ {election.endDate}
        </p>

        <div className="flex gap-4 flex-wrap">
          {election.status === "ACTIVE" && (
            <>
              <button
                onClick={() => {
                  setSelectedElectionId(election.id);
                  setView("candidates");
                }}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300"
              >
                View Candidates
              </button>
              <button
                onClick={() => {
                  setSelectedElectionId(election.id);
                  setView("candidates");
                }}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300"
              >
                Vote Now
              </button>
            </>
          )}
          {election.status === "UPCOMING" && (
            <button className="px-6 py-2 bg-gray-600 rounded-lg cursor-not-allowed">
              Coming Soon
            </button>
          )}
          {election.status === "CLOSED" && (
            <button
              onClick={() => {
                setSelectedElectionId(election.id);
                setView("results");
              }}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300"
            >
              View Results
            </button>
          )}
        </div>
      </div>
    );
  };

  if (view === "candidates") {
    return (
      <CandidatesList
        electionId={selectedElectionId}
        goBack={() => setView("elections")}
      />
    );
  }

  if (view === "results") {
    return (
      <Results
        electionId={selectedElectionId}
        goBack={() => setView("elections")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-6">
      <div className="relative w-full max-w-5xl z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Vote className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Voter Dashboard</h1>
          <p className="text-white/80 text-lg">Your Elections, Your Power</p>
        </div>

        {/* Active Elections */}
        <h2 className="text-2xl font-semibold text-green-400 mb-4">🟢 Active Elections</h2>
        <div className="space-y-6 mb-8">
          {elections.filter(e => e.status === "ACTIVE").map(renderElectionCard)}
        </div>

        {/* Upcoming Elections */}
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">🕒 Upcoming Elections</h2>
        <div className="space-y-6 mb-8">
          {elections.filter(e => e.status === "UPCOMING").map(renderElectionCard)}
        </div>

        {/* Closed Elections */}
        <h2 className="text-2xl font-semibold text-red-400 mb-4">🔴 Closed Elections</h2>
        <div className="space-y-6">
          {elections.filter(e => e.status === "CLOSED").map(renderElectionCard)}
        </div>
      </div>
    </div>
  );
}

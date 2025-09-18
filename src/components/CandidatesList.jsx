import React, { useState, useEffect } from "react";

export default function CandidatesList({ electionId, goBack }) {
  const [candidates, setCandidates] = useState([]);
  const [votedCandidate, setVotedCandidate] = useState(null);

  useEffect(() => {
    // Dummy data with photo & party logo
    const dummyCandidates = {
      1: [
        { id: 101, name: "John Doe", party: "Party A", photo: "https://randomuser.me/api/portraits/men/1.jpg", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Party_icon_red.svg/1024px-Party_icon_red.svg.png" },
        { id: 102, name: "Jane Smith", party: "Party B", photo: "https://randomuser.me/api/portraits/women/2.jpg", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Party_icon_blue.svg/1024px-Party_icon_blue.svg.png" }
      ],
      2: [
        { id: 201, name: "Alice Johnson", party: "Party C", photo: "https://randomuser.me/api/portraits/women/3.jpg", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Party_icon_green.svg/1024px-Party_icon_green.svg.png" },
        { id: 202, name: "Bob Brown", party: "Party D", photo: "https://randomuser.me/api/portraits/men/4.jpg", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Party_icon_yellow.svg/1024px-Party_icon_yellow.svg.png" }
      ]
    };
    setCandidates(dummyCandidates[electionId] || []);
  }, [electionId]);

  const handleVote = (candidateId) => {
    if (window.confirm("Are you sure you want to vote for this candidate?")) {
      setVotedCandidate(candidateId);
      alert("Vote cast successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <button onClick={goBack} className="mb-4 px-4 py-2 bg-gray-700 rounded-lg">
        ← Back to Elections
      </button>
      <h1 className="text-3xl font-bold mb-6">Candidates</h1>

      {candidates.length === 0 ? (
        <p>No candidates found for this election.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="bg-white/10 p-4 rounded-lg shadow-lg text-center">
              <img src={candidate.photo} alt={candidate.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500" />
              <h2 className="text-xl font-bold">{candidate.name}</h2>
              <div className="flex justify-center items-center gap-2 mt-2">
                <img src={candidate.logo} alt={candidate.party} className="w-6 h-6" />
                <span className="text-white/70">{candidate.party}</span>
              </div>
              <button
                onClick={() => handleVote(candidate.id)}
                disabled={votedCandidate !== null}
                className={`mt-4 px-4 py-2 rounded-lg transition-all duration-300 ${
                  votedCandidate === candidate.id
                    ? "bg-green-500"
                    : votedCandidate
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {votedCandidate === candidate.id
                  ? "Voted"
                  : votedCandidate
                  ? "Vote Disabled"
                  : "Vote"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

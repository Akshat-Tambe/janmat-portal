import React, { useState } from "react";

interface Candidate {
  id: string;
  candidate_name: string;
  age: number;
  email: string;
  party: string;
}

const CandidatePage: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([
    {
      id: "1",
      candidate_name: "Narendra Damodardas Modi",
      age: 70,
      email: "modi123@gamil.com",
      party: "BJP",
    },
    {
      id: "2",
      candidate_name: "Rahul Gandhi",
      age: 57,
      email: "rahul000@gamil.com",
      party: "CONGRESS",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCandidate, setNewCandidate] = useState<Candidate>({
    id: "",
    candidate_name: "",
    age: 0,
    email: "",
    party: "",
  });

  const handleAddCandidate = () => {
    setCandidates([
      ...candidates,
      { ...newCandidate, id: crypto.randomUUID() },
    ]);
    setNewCandidate({ id: "", candidate_name: "", age: 0, email: "", party: "" });
    setShowModal(false);
  };

  return (
    <div className="p-6 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Candidates</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          + Add Candidate
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border border-white/20 rounded-xl overflow-hidden backdrop-blur-md bg-white/10">
          <thead className="bg-white/20 text-gray-200">
            <tr>
              <th className="p-3 border border-white/20">ID</th>
              <th className="p-3 border border-white/20">Name</th>
              <th className="p-3 border border-white/20">Age</th>
              <th className="p-3 border border-white/20">Email</th>
              <th className="p-3 border border-white/20">Party</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr
                key={c.id}
                className="text-center hover:bg-white/10 transition"
              >
                <td className="p-2 border border-white/20">{c.id}</td>
                <td className="p-2 border border-white/20">{c.candidate_name}</td>
                <td className="p-2 border border-white/20">{c.age}</td>
                <td className="p-2 border border-white/20">{c.email}</td>
                <td className="p-2 border border-white/20">{c.party}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 sm:hidden">
        {candidates.map((c) => (
          <div
            key={c.id}
            className="border border-white/20 rounded-xl shadow-sm p-4 bg-white/10 backdrop-blur-md"
          >
            <h3 className="font-semibold text-lg">{c.candidate_name}</h3>
            <p className="text-sm text-gray-200">Party: {c.party}</p>
            <div className="mt-2 text-sm text-gray-100 space-y-1">
              <p><span className="font-medium">Age:</span> {c.age}</p>
              <p><span className="font-medium">Email:</span> {c.email}</p>
              <p><span className="font-medium">ID:</span> {c.id}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 w-full max-w-md shadow-lg border border-white/20">
            <h3 className="text-lg font-bold mb-4">Add Candidate</h3>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-white/30 p-2 rounded bg-transparent text-white placeholder-gray-300 focus:ring focus:ring-blue-300"
                value={newCandidate.candidate_name}
                onChange={(e) =>
                  setNewCandidate({ ...newCandidate, candidate_name: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Age"
                className="w-full border border-white/30 p-2 rounded bg-transparent text-white placeholder-gray-300 focus:ring focus:ring-blue-300"
                value={newCandidate.age}
                onChange={(e) =>
                  setNewCandidate({ ...newCandidate, age: Number(e.target.value) })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-white/30 p-2 rounded bg-transparent text-white placeholder-gray-300 focus:ring focus:ring-blue-300"
                value={newCandidate.email}
                onChange={(e) =>
                  setNewCandidate({ ...newCandidate, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Party"
                className="w-full border border-white/30 p-2 rounded bg-transparent text-white placeholder-gray-300 focus:ring focus:ring-blue-300"
                value={newCandidate.party}
                onChange={(e) =>
                  setNewCandidate({ ...newCandidate, party: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded border border-white/30 text-gray-200 hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCandidate}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidatePage;

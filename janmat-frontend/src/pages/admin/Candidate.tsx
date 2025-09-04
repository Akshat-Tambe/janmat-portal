import React, { useState } from "react";

interface Candidate {
  id: number;
  candidate_name: string;
  age: number;
  email: string;
  party: string;
}

const CandidatePage: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([
    {
      id: 1,
      candidate_name: "Narendra Damodardas Modi",
      age: 70,
      email: "modi123@gamil.com",
      party: "BJP",
    },
    {
      id: 2,
      candidate_name: "Rahul Gandhi",
      age: 57,
      email: "rahul000@gamil.com",
      party: "CONGRESS",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCandidate, setNewCandidate] = useState<Candidate>({
    id: 0,
    candidate_name: "",
    age: 0,
    email: "",
    party: "",
  });

  const handleAddCandidate = () => {
    setCandidates([
      ...candidates,
      { ...newCandidate, id: candidates.length + 1 },
    ]);
    setNewCandidate({ id: 0, candidate_name: "", age: 0, email: "", party: "" });
    setShowModal(false);
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Candidates</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Add Candidate
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block">
        <table className="w-full border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Age</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Party</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr
                key={c.id}
                className="text-center hover:bg-gray-50 transition"
              >
                <td className="p-2 border">{c.id}</td>
                <td className="p-2 border">{c.candidate_name}</td>
                <td className="p-2 border">{c.age}</td>
                <td className="p-2 border">{c.email}</td>
                <td className="p-2 border">{c.party}</td>
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
            className="border rounded-lg shadow-sm p-4 bg-white"
          >
            <h3 className="font-semibold text-lg">{c.candidate_name}</h3>
            <p className="text-sm text-gray-600">Party: {c.party}</p>
            <div className="mt-2 text-sm text-gray-700 space-y-1">
              <p><span className="font-medium">Age:</span> {c.age}</p>
              <p><span className="font-medium">Email:</span> {c.email}</p>
              <p><span className="font-medium">ID:</span> {c.id}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-lg font-bold mb-4">Add Candidate</h3>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded focus:ring focus:ring-blue-300"
                value={newCandidate.candidate_name}
                onChange={(e) =>
                  setNewCandidate({ ...newCandidate, candidate_name: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Age"
                className="w-full border p-2 rounded focus:ring focus:ring-blue-300"
                value={newCandidate.age}
                onChange={(e) =>
                  setNewCandidate({ ...newCandidate, age: Number(e.target.value) })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded focus:ring focus:ring-blue-300"
                value={newCandidate.email}
                onChange={(e) =>
                  setNewCandidate({ ...newCandidate, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Party"
                className="w-full border p-2 rounded focus:ring focus:ring-blue-300"
                value={newCandidate.party}
                onChange={(e) =>
                  setNewCandidate({ ...newCandidate, party: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded border hover:bg-gray-100"
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

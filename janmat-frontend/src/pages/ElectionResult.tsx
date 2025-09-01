import React from "react";

export default function ElectionResult() {
  const results = [
    { id: 1, name: "Candidate A", party: "Party X", votes: 120 },
    { id: 2, name: "Candidate B", party: "Party Y", votes: 90 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Election Results</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Candidate</th>
              <th className="py-2 px-4 border">Party</th>
              <th className="py-2 px-4 border">Votes</th>
            </tr>
          </thead>
          <tbody>
            {results.map((c) => (
              <tr key={c.id}>
                <td className="py-2 px-4 border">{c.name}</td>
                <td className="py-2 px-4 border">{c.party}</td>
                <td className="py-2 px-4 border">{c.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

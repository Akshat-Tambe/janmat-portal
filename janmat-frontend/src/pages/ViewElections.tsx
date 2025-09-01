import React from "react";

export default function ViewElections() {
  const elections = [
    { id: 1, title: "Election 2025", status: "Inactive", start: "2025-08-01", end: "2025-08-01" },
    { id: 2, title: "Local Election", status: "Active", start: "2025-07-01", end: "2025-07-01" },
  ];

  const handleDelete = (id: number) => {
    console.log("Delete election", id);
    // DELETE /api/elections/{id}
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Elections</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Start</th>
              <th className="py-2 px-4 border">End</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {elections.map((election) => (
              <tr key={election.id}>
                <td className="py-2 px-4 border">{election.title}</td>
                <td className="py-2 px-4 border">{election.status}</td>
                <td className="py-2 px-4 border">{election.start}</td>
                <td className="py-2 px-4 border">{election.end}</td>
                <td className="py-2 px-4 border">
                  <button onClick={() => handleDelete(election.id)} className="bg-red-600 text-white p-1 rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React from "react";

export default function StartEndElection() {
  const elections = [
    { id: 1, title: "Election 2025", status: "Inactive" },
    { id: 2, title: "Local Election", status: "Active" },
  ];

  const handleStart = (id: number) => {
    console.log("Start election", id);
    // PUT /api/elections/{id}/start
  };

  const handleEnd = (id: number) => {
    console.log("End election", id);
    // PUT /api/elections/{id}/end
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Start / End Election</h2>
      <div className="flex flex-col gap-4">
        {elections.map((election) => (
          <div key={election.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold">{election.title}</h3>
              <p>Status: {election.status}</p>
            </div>
            <div className="flex gap-2">
              {election.status === "Inactive" ? (
                <button onClick={() => handleStart(election.id)} className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
                  Start
                </button>
              ) : (
                <button onClick={() => handleEnd(election.id)} className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
                  End
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

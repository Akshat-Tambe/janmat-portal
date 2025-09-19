// src/pages/admin/Elections.tsx
import React, { useState } from "react";
import Button from "../../components/common/Button";
import { format, compareAsc, compareDesc } from "date-fns";
import SearchBar from "../../components/common/SearchSortFilter/SearchBar";
import StatusFilter from "../../components/common/SearchSortFilter/StatusFilter";
import SortToggle from "../../components/common/SearchSortFilter/SortToggle";

interface Election {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "Upcoming" | "Ongoing" | "Ended";
}

const electionsData: Election[] = [
  {
    id: 1,
    title: "Student Council Election 2025",
    description: "Election for student council representatives",
    status: "Upcoming",
    startDate: "2025-08-01T09:00:00",
    endDate: "2025-08-01T18:00:00",
  },
  {
    id: 2,
    title: "UP State Election 2025",
    description: "Election for CM of Uttar Pradesh",
    status: "Ended",
    startDate: "2025-07-29T09:00:00",
    endDate: "2025-07-29T12:21:00",
  },
  {
    id: 3,
    title: "MP State Election 2025",
    description: "Election for CM of Madhya Pradesh",
    status: "Ongoing",
    startDate: "2025-07-29T09:00:00",
    endDate: "2025-09-29T12:21:00",
  },
];

const Elections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [sortLatest, setSortLatest] = useState(true);

  const handleStart = (id: number) => console.log("Start election ID:", id);
  const handleDelete = (id: number) => console.log("Delete election ID:", id);
  const handleEdit = (id: number) => console.log("Edit election ID:", id);
  const handleEnd = (id: number) => console.log("End election ID:", id);
  const handleViewResults = (id: number) =>
    console.log("View results for election ID:", id);
  const handleArchive = (id: number) =>
    console.log("Archive election ID:", id);
  const handleLiveStats = (id: number) =>
    console.log("Live stats for election ID:", id);

  const toggleStatusFilter = (status: string) => {
    setStatusFilter((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const filteredElections = electionsData
    .filter((election) =>
      election.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((election) =>
      statusFilter.length ? statusFilter.includes(election.status) : true
    )
    .sort((a, b) =>
      sortLatest
        ? compareDesc(new Date(a.startDate), new Date(b.startDate))
        : compareAsc(new Date(a.startDate), new Date(b.startDate))
    );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Manage Elections</h1>

      {/* Filter + Search + Sort */}
      <div className="flex flex-wrap items-center gap-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <StatusFilter
          selectedStatuses={statusFilter}
          toggleStatus={toggleStatusFilter}
        />
        <SortToggle
          sortLatest={sortLatest}
          toggleSort={() => setSortLatest((prev) => !prev)}
        />
      </div>

      {/* Elections Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredElections.map((election) => (
          <div
            key={election.id}
            className="rounded-2xl shadow-lg p-5 hover:shadow-xl transition-shadow duration-300 
                       bg-white/10 backdrop-blur-md border border-white/20"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-white">
                {election.title}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${election.status === "Upcoming"
                  ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                  : election.status === "Ongoing"
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                  }`}
              >
                {election.status}
              </span>
            </div>

            <p className="text-gray-300 mt-2">{election.description}</p>

            <p className="text-gray-400 text-sm mt-3">
              {format(new Date(election.startDate), "dd MMM yyyy, HH:mm")} –{" "}
              {format(new Date(election.endDate), "dd MMM yyyy, HH:mm")}
            </p>

            {/* Conditional Buttons */}
            <div className="flex space-x-3 mt-4">
              {election.status === "Upcoming" && (
                <>
                  <Button
                    variant="primary"
                    onClick={() => handleStart(election.id)}
                  >
                    Start
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleEdit(election.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(election.id)}
                  >
                    Delete
                  </Button>
                </>
              )}

              {election.status === "Ongoing" && (
                <>
                  <Button
                    variant="info"
                    onClick={() => handleLiveStats(election.id)}
                  >
                    Live Stats
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleEnd(election.id)}
                  >
                    End
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(election.id)}
                  >
                    Delete
                  </Button>
                </>
              )}

              {election.status === "Ended" && (
                <>
                  <Button
                    variant="success"
                    onClick={() => handleViewResults(election.id)}
                  >
                    Results
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleArchive(election.id)}
                  >
                    Archive
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elections;

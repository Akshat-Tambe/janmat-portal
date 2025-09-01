import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session/token here
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <nav className="flex flex-col gap-2">
          <Link to="/" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
          <Link to="/create-election" className="hover:bg-gray-700 p-2 rounded">Create Election</Link>
          <Link to="/start-end-election" className="hover:bg-gray-700 p-2 rounded">Start/End Election</Link>
          <Link to="/view-elections" className="hover:bg-gray-700 p-2 rounded">View Elections</Link>
          <Link to="/results" className="hover:bg-gray-700 p-2 rounded">Results</Link>
          <button onClick={handleLogout} className="mt-4 bg-red-600 p-2 rounded hover:bg-red-700">Logout</button>
        </nav>
      </div>

      <div className="flex-1 bg-gray-100 p-6">
  <h1>Layout Loaded</h1>
  <Outlet />
</div>


      <div className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}


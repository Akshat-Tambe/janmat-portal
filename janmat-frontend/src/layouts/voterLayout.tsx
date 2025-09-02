import { Outlet, Link } from "react-router-dom";

const VoterLayout = () => {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-blue-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Voter Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="/voter/dashboard">Dashboard</Link>
          <Link to="/voter/elections">Elections</Link>
          <Link to="/voter/results/1">Results</Link>
          <Link to="/voter/profile">Profile</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default VoterLayout;

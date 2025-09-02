import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/elections">Elections</Link>
          <Link to="/admin/create-election">Create Election</Link>
          <Link to="/admin/candidates">Candidates</Link>
          <Link to="/admin/results">Results</Link>
          <Link to="/admin/profile">Profile</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

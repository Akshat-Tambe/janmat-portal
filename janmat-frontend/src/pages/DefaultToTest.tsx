import { Link } from "react-router-dom";

export default function DefaultToTest() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Default Test Page 🚀</h1>
      <p>Use these links to quickly navigate to different sections:</p>

      <nav style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
        {/* Auth Pages */}
        <h2>Auth</h2>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/forgot-password">Forgot Password</Link>

        {/* Admin Pages */}
        <h2>Admin</h2>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/create-election">Create Election</Link>
        <Link to="/admin/elections">Manage Elections</Link>
        <Link to="/admin/candidates">Candidates</Link>
        <Link to="/admin/results">Results</Link>
        <Link to="/admin/profile">Profile</Link>

        {/* Voter Pages */}
        <h2>Voter</h2>
        <Link to="/voter/dashboard">Dashboard</Link>
        <Link to="/voter/elections">View Elections</Link>
        <Link to="/voter/candidates/1">View Candidates</Link>
        <Link to="/voter/results/1">Election Results</Link>
        <Link to="/voter/profile">Profile</Link>
      </nav>
    </div>
  );
}

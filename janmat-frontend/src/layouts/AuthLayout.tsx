import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Side / Info Panel */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#f0f0f0",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Welcome to Online Voting</h1>
        <p>Please login or register to continue</p>
        <nav style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>

      {/* Right Side / Form Panel */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {/* Nested Routes will render here */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

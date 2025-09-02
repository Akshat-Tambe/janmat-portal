// src/pages/auth/Login.tsx
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="text" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
};
export default Login;

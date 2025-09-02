// src/pages/voter/Elections.tsx
import { Link } from "react-router-dom";

const Elections = () => {
  return (
    <div>
      <h1>View Elections</h1>
      <ul>
        <li>
          Election 2025 - Active <Link to="/voter/candidates/1">View Candidates</Link>
        </li>
      </ul>
    </div>
  );
};
export default Elections;

// src/pages/notfound/NotFound.tsx
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Button from "../../components/common/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      {/* Big 404 */}
      <h1 className="text-7xl md:text-9xl font-extrabold text-blue-500 drop-shadow-lg">
        404
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-300 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Glassmorphic Card */}
      <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 md:p-10 text-center max-w-lg">
        <p className="text-gray-200 mb-6">
          It looks like you may have taken a wrong turn.
          Don’t worry, it happens to the best of us.
        </p>
        <Link to="/">
          <Button variant="primary" className="flex items-center gap-2 mx-auto">
            <Home size={20} />
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

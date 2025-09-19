// src/pages/admin/AdminHome.tsx
import { Link } from "react-router-dom";

const AdminHome = () => {
    return (
        <div className="p-6 flex flex-col items-center justify-center text-center text-white min-h-[calc(100vh-4rem)] bg-transpare">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-10 border border-white/20 max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">👋 Welcome to the Admin Panel</h1>
                <p className="text-lg text-gray-300 mb-8">
                    Manage elections, candidates, results, and more.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        to="/admin/dashboard"
                        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
                    >
                        Go to Dashboard
                    </Link>
                    <Link
                        to="/admin/create-election"
                        className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-500 transition"
                    >
                        Create Election
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;

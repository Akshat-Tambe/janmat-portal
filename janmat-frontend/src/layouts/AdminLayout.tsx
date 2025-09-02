// src/layouts/AdminLayout.tsx
import { Outlet } from "react-router-dom";
import TopNavbar from "../components/navigation/TopNavbar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-background-light">
      <TopNavbar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

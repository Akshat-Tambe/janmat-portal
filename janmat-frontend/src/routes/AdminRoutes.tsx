import { useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Elections from "../pages/admin/Election";
import CreateElection from "../pages/admin/CreateElection";
import Candidates from "../pages/admin/Candidate";
import Results from "../pages/admin/Results";
import Profile from "../pages/admin/Profile";
import AdminHome from "../pages/admin/AdminHome";

const AdminRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        { index: true, element: <AdminHome /> }, 
        { path: "dashboard", element: <Dashboard /> },
        { path: "elections", element: <Elections /> },
        { path: "create-election", element: <CreateElection /> },
        { path: "candidates", element: <Candidates /> },
        { path: "results", element: <Results /> },
        { path: "profile", element: <Profile /> },
      ],

    },
  ]);

  return routes;
};

export default AdminRoutes;

import { useRoutes } from "react-router-dom";
import VoterLayout from "../layouts/voterLayout";
import Dashboard from "../pages/voter/Dashboard";
import Elections from "../pages/voter/Elections";
import Candidates from "../pages/voter/Candidates";
import Results from "../pages/voter/Result";
import Profile from "../pages/voter/Profile";

const VoterRoutes = () => {
   const routes = useRoutes([
    {
      path: "/",
      element: <VoterLayout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "elections", element: <Elections /> },
        { path: "candidates/:id", element: <Candidates /> },
        { path: "results/:id", element: <Results /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);

  return routes;
};

export default VoterRoutes;

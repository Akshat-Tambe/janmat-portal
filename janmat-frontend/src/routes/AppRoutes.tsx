import { useRoutes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import VoterRoutes from "./VoterRoutes";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import NotFound from "../pages/notFound/NotFound";
import DefaultToTest from "../pages/DefaultToTest";
import Landing from "../pages/landing/LandingPage";
import AboutDevelopers from "../components/landing/AboutDevs";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/contact", element: <AboutDevelopers /> },
    { path: "/default", element: <DefaultToTest /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/admin/*", element: <AdminRoutes /> },
    { path: "/voter/*", element: <VoterRoutes /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

export default AppRoutes;

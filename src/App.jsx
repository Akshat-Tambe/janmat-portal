import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import VoterDashboard from "./components/VoterDashboard";
import CandidatesList from "./components/CandidatesList";
import Results from "./components/Results";
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Navigate to="/RegisterPage" />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/voterdashboard" element={<VoterDashboard/>}/>
      <Route path="/candidate" element={<CandidatesList/>}/>
      <Route path="/result" element={<Results/>}/>
      </Routes>
    </Router>
  );
}

export default App; 
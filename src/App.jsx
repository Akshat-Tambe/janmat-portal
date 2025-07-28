import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

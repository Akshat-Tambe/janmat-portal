import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import StartEndElection from "./pages/StartEndElection";
import ViewElections from "./pages/ViewElections";
import ElectionResult from "./pages/ElectionResult";
import Login from "./pages/Login";
import CreateElection from "./pages/CreateElection";

export default function App() {
  return (
   <Router>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="create-election" element={<CreateElection />} />
      <Route path="start-end-election" element={<StartEndElection />} />
      <Route path="view-elections" element={<ViewElections />} />
      <Route path="results" element={<ElectionResult />} />
    </Route>
  </Routes>
</Router>
  );
}

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import PageNotAvailable from "./Pages/PageNotAvailable.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Events from "./Pages/Events.jsx";
import Teams from "./Pages/Teams.jsx";
import Leaderboard from "./Pages/Leaderboard.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import RegisterNow from "./Pages/RegisterNow.jsx";
import AdminLayout from "./Admin/AdminLayout.jsx";
import Dashboard from "./Admin/pages/Dashboard.jsx";
import ProtectedRoute from "./Admin/ProtectedRoute.jsx";
import ScrollToTop from "./Pages/ScrollToTop.jsx";
import { PointsProvider } from "./PointsContext.jsx";
import Boys from "./Admin/pages/Boys.jsx";
import Girls from "./Admin/pages/Girls.jsx";
import MainAdmin from "./Admin/pages/MainAdmin.jsx";
import Games from "./Pages/Games.jsx";

function App() {
  // const [teams, setTeams] = useState(() => {
  //   const savedTeams = localStorage.getItem("teams");
  //   return savedTeams ? JSON.parse(savedTeams) : [];
  // });

  // const handleTeamsUpdate = (updatedTeams) => {
  //   setTeams(updatedTeams);
  // };
  return (
    <Router>
      <PointsProvider>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/games" element={<Games />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/register-now" element={<RegisterNow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<PageNotAvailable />} />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  {" "}
                  <Dashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/boys"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  {" "}
                  <Boys />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  {" "}
                  <MainAdmin/>
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/girls"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  {" "}
                  <Girls />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </PointsProvider>
    </Router>
  );
}

export default App;

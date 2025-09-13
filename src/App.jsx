import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import LandingPage from "./pages/landing/landingPage";
import UserSetup from "./pages/userSetup/userSetup";
import Layout from "./pages/layout/layout";
import Dashboard from "./pages/main/dashboard/dashboard";
import JobTracker from "./pages/main/tracker/jobTracker";
import ResumeBuilder from "./pages/main/builder/resumeBuilder";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "pastel";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <UserProvider>
      <div className="font-montserrat bg-base-100">
        <Router>
          <Routes>
            {/* Public routes */}
            <Route index element={<LandingPage />} />
            <Route path="/setup" element={<UserSetup />} />

            {/* Protected/Layout routes */}
            <Route
              path="/"
              element={<Layout theme={theme} setTheme={setTheme} />}
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="jobTracker" element={<JobTracker />} />
              <Route path="builder" element={<ResumeBuilder />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;

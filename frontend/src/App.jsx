import "./index.css";
import React, { useState } from "react"; // Import useState
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("accessToken") || "");

  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/login" element={<LoginPage setToken={setToken} />} />

      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/logout" element={<LogoutPage />} />
    </Routes>
  );
}

export default App;

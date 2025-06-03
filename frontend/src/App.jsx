import React, { useState } from "react"; // Import useState
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";
import LogoutPage from "./pages/LogoutPage";
import Homepage from "./pages/Homepage";
import ExpensesPage from "./pages/ExpensesPage";
import RevenuePage from "./pages/RevenuePage";
import "./index.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("accessToken") || "");

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignupPage setToken={setToken} />} />
      <Route path="/login" element={<LoginPage setToken={setToken} />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/expenses" element={<ExpensesPage />} />
      <Route path="/revenue" element={<RevenuePage />} />
    </Routes>
  );
}
export default App;

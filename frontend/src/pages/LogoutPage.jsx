// src/pages/LogoutPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    navigate("/login");
  }, [navigate]);

  return <p>Logging out...</p>;
}

export default LogoutPage;

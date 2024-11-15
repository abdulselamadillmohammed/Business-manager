// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useLogin } from "../services/mutations";

function LoginPage({ setToken }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { mutate, isSuccess, isError, error } = useLogin();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: (data) => {
        setToken(data.access);
        localStorage.setItem("refreshToken", data.refresh);
      },
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
        value={formData.username}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
        value={formData.password}
        required
      />
      <button type="submit">Login</button>
      {isSuccess && <p>Login successful!</p>}
      {isError && <p>{error.response?.data?.message || "Login failed"}</p>}
    </form>
  );
}

export default LoginPage;

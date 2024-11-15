// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { useSignup } from "../services/mutations";

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    profile_picture: null,
  });
  const { mutate, isSuccess, isError, error } = useSignup();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, profile_picture: e.target.files[0] }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    mutate(data);
  };

  return (
    <form onSubmit={handleSignup}>
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
      <input
        type="file"
        name="profile_picture"
        onChange={handleFileChange}
        accept="image/*"
      />
      <button type="submit">Signup</button>
      {isSuccess && <p>User created successfully!</p>}
      {isError && <p>{error.response?.data?.message || "Signup failed"}</p>}
    </form>
  );
}

export default SignupPage;

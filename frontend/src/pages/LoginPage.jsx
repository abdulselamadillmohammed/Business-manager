// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useLogin } from "../services/mutations";
import styles from "../assets/css/loginPage.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setToken }) {
  const navigate = useNavigate();
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
        navigate("/dashboard");
      },

      // Show pop up error message and hold for 3 seconds
      onError: () => {
        navigate("/login");
      },
    });
  };

  return (
    <div className={styles.loginPageContainer}>
      <p className={styles.loginPageHeading}>Log In to your Account</p>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <div className={styles.loginInputContainer}>
          <label className={styles.loginLabel} htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className={styles.loginInput}
            placeholder="Username"
            onChange={handleInputChange}
            value={formData.username}
            required
          />
          <p className={styles.lowerInputLabel}>Please enter your username</p>
        </div>
        <div className={styles.loginInputContainer}>
          <label className={styles.loginLabel} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.loginInput}
            placeholder="Password"
            onChange={handleInputChange}
            value={formData.password}
            required
          />
          <p className={styles.lowerInputLabel}>Please enter your password</p>
        </div>
        <button className={styles.loginFormButton} type="submit">
          Log in
        </button>

        <p className={styles.forgotPasswordRedirect}>Forgot Password?</p>
        <div className={styles.signupRedirectContainer}>
          <p>Don’t have an account?</p>
          <p
            className={styles.signupRedirect}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </p>
        </div>
      </form>
    </div>
  );
}

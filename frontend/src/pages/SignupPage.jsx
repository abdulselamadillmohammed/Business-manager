// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { useSignup, useLogin } from "../services/mutations"; // Import both signup and login mutations
import { useNavigate } from "react-router-dom"; // For redirection
import styles from "../assets/css/signupPage.module.css";

function SignupPage({ setToken }) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    profile_picture: null,
  });
  const [fileUploaded, setFileUploaded] = useState(false);

  const { mutate: signupMutate } = useSignup();
  const { mutate: loginMutate } = useLogin();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, profile_picture: e.target.files[0] }));
    setFileUploaded(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Trigger signup mutation
    signupMutate(data, {
      onSuccess: () => {
        // Automatically log in after signup success
        loginMutate(
          { username: formData.username, password: formData.password },
          {
            onSuccess: (loginData) => {
              // Save tokens and redirect to dashboard
              setToken(loginData.access);
              localStorage.setItem("refreshToken", loginData.refresh);
              navigate("/dashboard"); // Redirect to dashboard
            },
            onError: (loginError) => {
              console.error("Login failed after signup:", loginError);
            },
          }
        );
      },
      onError: (signupError) => {
        console.error("Signup failed:", signupError);
      },
    });
  };

  return (
    <div className={styles.signupPageContainer}>
      <p className={styles.signupPageHeading}>Create Your Account</p>

      <form className={styles.signupForm} onSubmit={handleSignup}>
        <div className={styles.signupInputContainer}>
          <label className={styles.signupLabel} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className={styles.signupInput}
            placeholder="Email"
            onChange={handleInputChange}
            value={formData.email}
            required
          />
          <p className={styles.lowerInputLabel}>Please enter your email</p>
        </div>

        <div className={styles.signupInputContainer}>
          <label className={styles.signupLabel} htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            className={styles.signupInput}
            placeholder="Username"
            onChange={handleInputChange}
            value={formData.username}
            required
          />
          <p className={styles.lowerInputLabel}>Please enter your username</p>
        </div>
        <div className={styles.signupInputContainer}>
          <label className={styles.signupLabel} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className={styles.signupInput}
            placeholder="Password"
            onChange={handleInputChange}
            value={formData.password}
            required
          />
          <p className={styles.lowerInputLabel}>Please enter your password</p>
        </div>

        <div className={styles.fileInputContainer}>
          <input
            type="file"
            name="profile_picture"
            onChange={handleFileChange}
            accept="image/*"
            className={styles.fileInput}
          />
          <span className={styles.fileInputButton}></span>
          <p
            className={
              fileUploaded ? styles.fileUploadedText : styles.fileNotUploaded
            }
          >
            Profile picture has been uploaded
          </p>
        </div>
        <button className={styles.signupFormButton} type="submit">
          Sign up
        </button>
        <div className={styles.loginRedirectContainer}>
          <p>Already have an account?</p>
          <p
            className={styles.loginRedirect}
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;

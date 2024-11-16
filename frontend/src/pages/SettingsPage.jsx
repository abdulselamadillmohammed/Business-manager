import DashboardSidebar from "../components/DashboardSidebar";
import styles from "../assets/css/settingsPage.module.css";
import upgradeToPremiumIcon from "../assets/icons/upgradeToPremiumIcon.png";
import changePasswordIcon from "../assets/icons/changePasswordIcon.png";
import settingsPageDeleteIcon from "../assets/icons/settingsPageDeleteIcon.png";
import { useCurrentUser } from "../services/queries";
import { useUpdateUserDetails } from "../services/mutations";
import { useState, useRef } from "react";

export default function SettingsPage() {
  const token = localStorage.getItem("accessToken");
  const { data: user, isLoading, isError, refetch } = useCurrentUser(token);

  // Initialize email with a fallback until the user data is loaded
  const [email, setEmail] = useState("");

  // Update email state once user data is available
  if (user && !email) {
    setEmail(user.email); // Set email only when `user` is available
  }

  const updateUserDetails = useUpdateUserDetails();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission if inside a form
      updateUserDetails.mutate(
        { email },
        {
          onSuccess: () => {
            console.log("Email updated successfully!");
            refetch(); // Refetch user data to show the updated email
          },
          onError: (error) => {
            console.error(
              "Error updating email:",
              error.response?.data || error.message
            );
          },
        }
      );
    }
  };

  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically click the input
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profile_picture", file);

      updateUserDetails.mutate(formData, {
        onSuccess: () => {
          console.log("Profile picture updated successfully!");
          refetch(); // Refetch user data to show the updated profile picture
        },
        onError: (error) => {
          console.error(
            "Error updating profile picture:",
            error.response?.data || error.message
          );
        },
      });
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching user data</p>;
  return (
    <>
      <div className={styles.settingsPageContainer}>
        <DashboardSidebar
          profilePicture={`http://127.0.0.1:8000${user.profile_picture}`}
          username={user.username}
        />
        <div className={styles.accountEditingSection}>
          <div className={styles.accountEditingButtonSection}>
            <section className={styles.changeProfileContainer}>
              <img
                className={styles.settingsPageProfilePicture}
                src={`http://127.0.0.1:8000${user.profile_picture}`}
                alt="Profile picture"
              />
              <div
                className="changeProfilePictureContainer"
                onClick={handleDivClick} // Trigger input click on div click
              >
                <input
                  type="file"
                  name="profile_picture"
                  accept="image/*"
                  className={styles.fileInput}
                  ref={fileInputRef} // Associate the input with the ref
                  onChange={handleFileChange} // Handle file selection
                  style={{ display: "none" }} // Hide the input
                />
                <p className={styles.changeProfilePicture}>
                  Change profile picture
                </p>
              </div>
            </section>

            <div className={styles.premiumAndPasswordContainer}>
              <section className={styles.upgradeToPremiumSection}>
                <img
                  className={styles.upgradeToPremiumIcon}
                  src={upgradeToPremiumIcon}
                  alt="Upgrade to premium icon"
                />
                <p className={styles.upgradeToPremiumText}>
                  Upgrade to Premium
                </p>
              </section>

              <section className={styles.changePasswordSection}>
                <img
                  className={styles.changePasswordIcon}
                  src={changePasswordIcon}
                  alt="Change password icon"
                />
                <p className={styles.changePasswordText}>Change password</p>
              </section>
            </div>

            <section className={styles.deleteAccountButton}>
              <img
                className={styles.settingsPageDeleteIcon}
                src={settingsPageDeleteIcon}
                alt="Delete account icon"
              />
              <p className={styles.deleteAccountText}>Delete account</p>
            </section>
          </div>

          <div className={styles.accountEditingTypingSection}>
            <p className={styles.editAccountDetailsTitle}>
              Edit Account Details
            </p>

            <section className={styles.changeDetailSection}>
              <label className={styles.changeDetailLabel} htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                disabled
                value={user.username}
              />
            </section>

            <section className={styles.changeDetailSection}>
              <label className={styles.changeDetailLabel} htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleInputChange} // Update state when typing
                onKeyDown={handleKeyDown} // Trigger function on Enter key press
                className={styles.emailInput} // Optional: Add a CSS class
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

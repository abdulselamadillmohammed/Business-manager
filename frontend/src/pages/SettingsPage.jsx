import DashboardSidebar from "../components/DashboardSidebar";
import styles from "../assets/css/settingsPage.module.css";
import sampleProfilePicture from "../assets/images/sampleProfilePicture.png";
import upgradeToPremiumIcon from "../assets/icons/upgradeToPremiumIcon.png";
import changePasswordIcon from "../assets/icons/changePasswordIcon.png";
import settingsPageDeleteIcon from "../assets/icons/settingsPageDeleteIcon.png";

export default function SettingsPage() {
  return (
    <>
      <div className={styles.settingsPageContainer}>
        <DashboardSidebar />

        <div className={styles.accountEditingSection}>
          <div className={styles.accountEditingButtonSection}>
            <section className={styles.changeProfileContainer}>
              <img
                className={styles.settingsPageProfilePicture}
                src={sampleProfilePicture}
                alt="Profile picture"
              />
              <p className={styles.changeProfilePicture}>
                Change profile picture
              </p>
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
              <label className={styles.changeDetailLabel} for="username">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                disabled
                value={"deltauser48"}
              />
            </section>

            <section className={styles.changeDetailSection}>
              <label className={styles.changeDetailLabel} for="fullName">
                Full Name:
              </label>
              <input type="text" name="fullName" id="fullName" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

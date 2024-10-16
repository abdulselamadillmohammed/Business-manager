import styles from "../assets/css/welcomeBoard.module.css";
import logo from "../assets/images/dashboardWelcomeImage.png";
export default function WelcomeBoard() {
  return (
    <>
      <div className={styles.welcomeBoardContainer}>
        <section className={styles.welcomeBoardTextContainer}>
          <p className={styles.welcomeBoardMainText}>
            Welcome back, Admin user
          </p>
          <p className={styles.welcomeBoardSupportingText}>2nd October, 2024</p>
        </section>
        {/* Change to localtime */}
        <img
          src={logo}
          alt="Welcome image"
          className={styles.welcomeBoardImage}
        />
      </div>
    </>
  );
}

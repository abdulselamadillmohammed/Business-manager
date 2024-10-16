import styles from "../assets/css/dashboardPage.module.css";
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
      </div>
    </>
  );
}

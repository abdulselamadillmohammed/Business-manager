import styles from "../assets/css/welcomeBoard.module.css";
import logo from "../assets/images/dashboardWelcomeImage.png";
export default function WelcomeBoard({ username }) {
  function formatDate(date) {
    const day = date.getDate();

    // Determine the correct suffix for the day
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    // Get the full month name and year
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    // Format the date
    return `${day}${suffix} ${month}, ${year}`;
  }
  const today = new Date();
  return (
    <>
      <div className={styles.welcomeBoardContainer}>
        <section className={styles.welcomeBoardTextContainer}>
          <p className={styles.welcomeBoardMainText}>
            Welcome back, {username}
          </p>
          <p className={styles.welcomeBoardSupportingText}>
            {formatDate(today)}
          </p>
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

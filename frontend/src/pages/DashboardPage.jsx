import WelcomeBoard from "../components/WelcomeBoard";
import RemindersBoard from "../components/RemindersBoard";
import styles from "../assets/css/dashboardPage.module.css";
export default function DashboardPage() {
  return (
    <div className={styles.dashboardPageContainer}>
      <WelcomeBoard />
      <RemindersBoard />
    </div>
  );
}

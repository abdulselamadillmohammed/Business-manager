import WelcomeBoard from "../components/WelcomeBoard";
import RemindersBoard from "../components/RemindersBoard";
import styles from "../assets/css/dashboardPage.module.css";
import DashboardRevenue from "../components/DashboardRevenue";
export default function DashboardPage() {
  return (
    <div className={styles.dashboardPageContainer}>
      <div className={styles.welcomeBoardAndReminderBoardContainer}>
        <div className="welcomeBoardAndReveueAndExpensesCardsContainer">
          <WelcomeBoard />
          <div className="revenueAndExpensesContainer">
            <DashboardRevenue />
          </div>
        </div>
        <RemindersBoard />
      </div>
    </div>
  );
}

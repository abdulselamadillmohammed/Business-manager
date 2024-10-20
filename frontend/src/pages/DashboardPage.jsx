import WelcomeBoard from "../components/WelcomeBoard";
import RemindersBoard from "../components/RemindersBoard";
import styles from "../assets/css/dashboardPage.module.css";
import DashboardRevenue from "../components/DashboardRevenue";
import DashboardExpenses from "../components/DashboardExpenses";
export default function DashboardPage() {
  return (
    <div className={styles.dashboardPageContainer}>
      <div className={styles.welcomeBoardAndReminderBoardContainer}>
        <div className={styles.welcomeBoardAndReveueAndExpensesCardsContainer}>
          <WelcomeBoard />
          <div className={styles.revenueAndExpensesContainer}>
            <DashboardRevenue />
            <DashboardExpenses />
          </div>
        </div>
        <RemindersBoard />
      </div>
    </div>
  );
}

import WelcomeBoard from "../components/WelcomeBoard";
import RemindersBoard from "../components/RemindersBoard";
import styles from "../assets/css/dashboardPage.module.css";
import DashboardRevenue from "../components/DashboardRevenue";
import DashboardExpenses from "../components/DashboardExpenses";
import DashboardTransactions from "../components/DashboardTransactions";
import DashboardSidebar from "../components/DashboardSidebar";
export default function DashboardPage() {
  return (
    <div
      className={styles.dashboardPageContainer}
      onClick={() => {
        console.log("Clicking on dashboard");
      }}
    >
      <div className={styles.dashboardPageLeftSideContainer}>
        <DashboardSidebar />
      </div>
      <div className={styles.dashboardPageRightSideContainer}>
        <div className={styles.dashboardPageTopSection}>
          <div className={styles.welcomeBoardAndReminderBoardContainer}>
            <div
              className={styles.welcomeBoardAndReveueAndExpensesCardsContainer}
            >
              <WelcomeBoard />
              <div className={styles.revenueAndExpensesContainer}>
                <DashboardRevenue />
                <DashboardExpenses />
              </div>
            </div>

            <RemindersBoard />
          </div>
        </div>
        <div className={styles.dashboardPageBottomSection}>
          <DashboardTransactions className={styles.addReminderOnDashboard} />
        </div>
      </div>
    </div>
  );
}

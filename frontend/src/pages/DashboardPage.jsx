import WelcomeBoard from "../components/WelcomeBoard";
import RemindersBoard from "../components/RemindersBoard";
import styles from "../assets/css/dashboardPage.module.css";
import DashboardRevenue from "../components/DashboardRevenue";
import DashboardExpenses from "../components/DashboardExpenses";
import DashboardTransactions from "../components/DashboardTransactions";
import DashboardSidebar from "../components/DashboardSidebar";
import { useCurrentUser } from "../services/queries";
export default function DashboardPage() {
  const token = localStorage.getItem("accessToken");
  const { data: user, isLoading, isError } = useCurrentUser(token);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching user data</p>;
  return (
    <div
      className={styles.dashboardPageContainer}
      onClick={() => {
        console.log("Clicking on dashboard");
      }}
    >
      <div className={styles.dashboardPageLeftSideContainer}>
        <DashboardSidebar
          profilePicture={`http://127.0.0.1:8000${user.profile_picture}`}
          username={user.username}
        />
      </div>
      <div className={styles.dashboardPageRightSideContainer}>
        <div className={styles.dashboardPageTopSection}>
          <div className={styles.welcomeBoardAndReminderBoardContainer}>
            <div
              className={styles.welcomeBoardAndReveueAndExpensesCardsContainer}
            >
              <WelcomeBoard username={user.username} />
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

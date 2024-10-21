import styles from "../assets/css/dashboardTransactions.module.css";
import TransactionTemplate from "./TransactionTemplate";
export default function DashboardTransactions() {
  return (
    <>
      <div className={styles.dashboardTransactionsContainer}>
        <p className={styles.dashboardTransactionsHeadingText}>
          Recent transactions
        </p>
        <ul className={styles.dashboardTransactionsNavbar}>
          <li className={styles.dashboardTransactionsNavbarElement}>
            Transaction description
          </li>
          <li className={styles.dashboardTransactionsNavbarElement}>Type</li>
          <li className={styles.dashboardTransactionsNavbarElement}>Price</li>
        </ul>
        <div className={styles.transactionContainer}>
          <TransactionTemplate />
          <TransactionTemplate />
          <TransactionTemplate />
          <TransactionTemplate />
          <TransactionTemplate />
          <TransactionTemplate />
        </div>
      </div>
    </>
  );
}

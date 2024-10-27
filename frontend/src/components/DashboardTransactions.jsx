import styles from "../assets/css/dashboardTransactions.module.css";
import TransactionTemplate from "./TransactionTemplate";
import { useLocation } from "react-router-dom";
export default function DashboardTransactions() {
  const location = useLocation();
  return (
    <>
      <div
        className={
          location.pathname === "/dashboard"
            ? styles.dashboardTransactionsContainer
            : styles.transactionsPageTransactionsContainer
        }
      >
        <p
          className={
            location.pathname === "/dashboard"
              ? styles.dashboardTransactionsHeadingText
              : styles.dashboardTransactionsHeadingTextInactive
          }
        >
          Recent transactions
        </p>
        <ul className={styles.dashboardTransactionsNavbar}>
          <li className={styles.dashboardTransactionsNavbarElement}>
            Transaction description
          </li>
          <li className={styles.dashboardTransactionsNavbarElement}>Type</li>
          <li className={styles.dashboardTransactionsNavbarElement}>Price</li>
        </ul>
        <div
          className={
            location.pathname === "/dashboard"
              ? styles.transactionContainer
              : styles.transactionsPageTransactionContainer
          }
        >
          {/* Loop via props */}
          <TransactionTemplate />
          <TransactionTemplate />
          <TransactionTemplate />
          <TransactionTemplate />
          <TransactionTemplate />
          <TransactionTemplate />
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

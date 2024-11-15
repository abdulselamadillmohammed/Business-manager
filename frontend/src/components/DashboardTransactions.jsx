import styles from "../assets/css/dashboardTransactions.module.css";
import TransactionTemplate from "./TransactionTemplate";
import { useLocation } from "react-router-dom";
import { useAllTransactions } from "../services/queries";
export default function DashboardTransactions() {
  const {
    data: listTransactions = [],
    isLoading,
    isError,
  } = useAllTransactions();
  const location = useLocation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading transactions.</p>;
  }
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
          {listTransactions.map((transaction, index) => (
            <TransactionTemplate
              key={index}
              transaction_icon={transaction.transaction_icon}
              transaction_title={transaction.transaction_title}
              transaction_detail={transaction.transaction_detail}
              transaction_type={transaction.transaction_type}
              transaction_price={transaction.transaction_price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

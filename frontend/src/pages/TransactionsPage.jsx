import DashboardSidebar from "../components/DashboardSidebar";
import styles from "../assets/css/transactionsPage.module.css";
import DashboardTransactions from "../components/DashboardTransactions";
import addTransactionIcon from "../assets/icons/addTransactionIcon.png";

export default function TransactionsPage() {
  return (
    <>
      <div className={styles.transactionsPageContainer}>
        <DashboardSidebar />
        <div className={styles.transactionsContainer}>
          <div className={styles.transactionsTitleSection}>
            <p className={styles.transactionsTitleText}>Transactions</p>

            <div className={styles.addTransactionContainer}>
              <img
                src={addTransactionIcon}
                alt="Add transaction icon"
                className={styles.addTransactionIcon}
              />
              <p className={styles.addTransactionText}>Add Transaction</p>
            </div>
          </div>
          <DashboardTransactions />
        </div>
      </div>
    </>
  );
}

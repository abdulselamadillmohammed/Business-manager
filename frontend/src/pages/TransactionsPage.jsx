import DashboardSidebar from "../components/DashboardSidebar";
import styles from "../assets/css/transactionsPage.module.css";
import DashboardTransactions from "../components/DashboardTransactions";
import addTransactionIcon from "../assets/icons/addTransactionIcon.png";
import AddTransaction from "../components/AddTransaction";
import { useDispatch } from "react-redux";
import { setIsAddingTranaction } from "../features/exampleSlice";
export default function TransactionsPage() {
  const dispatch = useDispatch();
  const startAddingTransaction = () => {
    dispatch(setIsAddingTranaction(true));
  };
  return (
    <>
      <div className={styles.transactionsPageContainer}>
        <DashboardSidebar />
        <div className={styles.transactionsContainer}>
          <div className={styles.transactionsTitleSection}>
            <p className={styles.transactionsTitleText}>Transactions</p>

            <div
              className={styles.addTransactionContainer}
              onClick={startAddingTransaction}
            >
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
        <AddTransaction />
      </div>
    </>
  );
}

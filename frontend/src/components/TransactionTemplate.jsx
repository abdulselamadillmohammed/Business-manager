import styles from "../assets/css/transactionTemplate.module.css";
import shoppingTransaction from "../assets/icons/shoppingTransaction.png";
import utilitiesIcon from "../assets/icons/utilitiesTransaction.png";
import transportationIcon from "../assets/icons/transportationTransaction.png";
import salaryTransaction from "../assets/icons/salaryTransaction.png";
export default function TransactionTemplate({
  transaction_icon,
  transaction_title,
  transaction_detail,
  transaction_type,
  transaction_price,
}) {
  return (
    <>
      <div className={styles.transactiontemplateContainer}>
        <div className={styles.iconContainer}>
          {/*
            Link icons to backend
            Note: make sure to ss at 120px by 120px
            */}
          <img
            className={styles.transactionLogo}
            src={
              transaction_icon === "shopping"
                ? shoppingTransaction
                : transaction_icon === "utilities"
                ? utilitiesIcon
                : transaction_icon === "transport"
                ? transportationIcon
                : salaryTransaction
            }
            alt="Transaction icon"
          />
        </div>
        <div className={styles.transactionDescriptionContainer}>
          <p className={styles.transactionDescriptionHeaderText}>
            {transaction_title.length < 25
              ? transaction_title
              : `${transaction_title.slice(0, 25)}...`}
          </p>
          <p className={styles.transactionDescriptionSupportingText}>
            {transaction_detail.length < 25
              ? transaction_detail
              : `${transaction_detail.slice(0, 25)}...`}
          </p>
        </div>
        <p className={styles.transactionType}>
          {transaction_type === "E" ? "Expense" : "Revenue"}
        </p>
        <p className={styles.transactionPrice}>{`$${transaction_price}`}</p>
        <p className={styles.editTransaction}>Edit</p>
      </div>
    </>
  );
}

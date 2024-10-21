import styles from "../assets/css/transactionTemplate.module.css";
import transactionLogo from "../assets/icons/waterDropletIcon.png";
export default function TransactionTemplate() {
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
            src={transactionLogo}
            alt="Transaction icon"
          />
        </div>
        <div className={styles.transactionDescriptionContainer}>
          <p className={styles.transactionDescriptionHeaderText}>
            Toronto Hydro
          </p>
          <p className={styles.transactionDescriptionSupportingText}>N/A</p>
        </div>
        <p className={styles.transactionType}>Expense</p>
        <p className={styles.transactionPrice}>$24.61</p>
        <p className={styles.editTransaction}>Edit</p>
      </div>
    </>
  );
}

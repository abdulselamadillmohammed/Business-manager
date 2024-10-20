import styles from "../assets/css/dashboardExpenses.module.css";
import logo from "../assets/icons/expensesCardIcon.png";
import downArrow from "../assets/icons/expensesCardDownArrow.png";
export default function DashboardExpenses() {
  return (
    <>
      <div className={styles.dashboardExpensesContainer}>
        <div className={styles.expensesCardContainerTopSection}>
          <div className={styles.iconContainer}>
            <img
              className={styles.expensesCardIcon}
              src={logo}
              alt="Expenses card icon"
            />
          </div>

          <div className={styles.expensesCardTextContainer}>
            <p className={styles.expensesCardSupportingText}>EXPENSES</p>
            <p className={styles.expensesCardMainText}>$555.72</p>
          </div>

          <div className={styles.expensesCardPercentageContainer}>
            <p className={styles.expensesCardPercentage}>2.4%</p>
            {/* Make state conditional based on percentage */}
            <img
              className={styles.expensesCardArrowDown}
              src={downArrow}
              alt="Arrow down"
            />
          </div>
        </div>

        <div className={styles.expensesCardContainerBottomSection}>
          <p className={styles.expensesCardViewMore}>View more &gt;</p>
        </div>
      </div>
    </>
  );
}

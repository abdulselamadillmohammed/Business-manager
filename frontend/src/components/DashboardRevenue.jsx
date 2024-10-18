import styles from "../assets/css/dashboardRevenue.module.css";
import logo from "../assets/icons/revenueCardIcon.png";
export default function DashboardRevenue() {
  return (
    <>
      <div className={styles.dashboardRevenueContainer}>
        <div className={styles.iconContainer}>
          <img
            className={styles.revenueCardIcon}
            src={logo}
            alt="revenueCardIcon"
          />
        </div>
        <div className={styles.revenueCardTextContainer}>
          <p className={styles.revenueCardSupportingText}>REVENUE</p>
          <p className={styles.revenueCardMainText}>$4,571.32</p>
        </div>
      </div>
    </>
  );
}

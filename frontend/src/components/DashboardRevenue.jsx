import styles from "../assets/css/dashboardRevenue.module.css";
import logo from "../assets/icons/revenueCardIcon.png";
import upArrow from "../assets/icons/revenueCardUpArrow.png";
import { useNavigate } from "react-router-dom";
export default function DashboardRevenue() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.dashboardRevenueContainer}>
        <div className={styles.revenueCardContainerTopSection}>
          <div className={styles.iconContainer}>
            <img
              className={styles.revenueCardIcon}
              src={logo}
              alt="Revenue card icon"
            />
          </div>

          <div className={styles.revenueCardTextContainer}>
            <p className={styles.revenueCardSupportingText}>REVENUE</p>
            <p className={styles.revenueCardMainText}>$4,571.32</p>
          </div>

          <div className={styles.revenueCardPercentageContainer}>
            <p className={styles.revenueCardPercentage}>19.2 %</p>
            {/* Make state conditional based on percentage */}
            <img
              className={styles.revenueCardArrowUp}
              src={upArrow}
              alt="Arrow up"
            />
          </div>
        </div>
        <div className={styles.revenueCardContainerBottomSection}>
          <p
            className={styles.revenueCardViewMore}
            onClick={() => {
              navigate("/revenue");
            }}
          >
            View more &gt;
          </p>
        </div>
      </div>
    </>
  );
}

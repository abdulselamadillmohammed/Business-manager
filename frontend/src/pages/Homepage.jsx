import styles from "../assets/css/homePage.module.css";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className={styles.homePageContainer}>
      <nav className={styles.homepageNavbar}>
        <div className={styles.spacefiller}></div>
        <div className={styles.supportingTextContainer}>
          <p className={styles.homepageNavbarSupportingText}>ABOUT US</p>
          <p className={styles.homepageNavbarSupportingText}>OUR TEAM</p>
          <p className={styles.homepageNavbarSupportingText}>LEARN</p>
        </div>
        <div className={styles.navBarLoginAndSignupContainer}>
          <p
            className={styles.homepageLoginButton}
            onClick={() => {
              navigate("/login");
            }}
          >
            LOG IN
          </p>
          <div
            className={styles.homepageSignupnButton}
            onClick={() => {
              navigate("/signup");
            }}
          >
            SIGN UP
          </div>
        </div>
      </nav>
      <div className={styles.homepageTextContainer}>
        <p className={styles.homepageMainText}>
          Simplify Your Business <br /> Finances
        </p>
        <p className={styles.homepageSupportingText}>
          Track your transactions, analyze trends, and stay on top <br /> of
          your business performance.
        </p>
      </div>

      <div className={styles.homepageCallToActionContainer}>
        <p
          className={styles.firstCallToAction}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Add Your First Transaction
        </p>
        <p
          className={styles.secondCallToAction}
          onClick={() => {
            navigate("/signup");
          }}
        >
          View Financial Insights
        </p>
      </div>
      <div className={styles.videoContainer}></div>
      <div className={styles.homepageFooter}>
        <ul className={styles.footerSubSectionContainer}>
          <li className={styles.footerPoint}>Social</li>
          <li className={styles.footerPoint}>Facebook</li>
          <li className={styles.footerPoint}>Twitter</li>
          <li className={styles.footerPoint}>LinkedIn</li>
          <li className={styles.footerPoint}>Instagram</li>
        </ul>
        <ul className={styles.footerSubSectionContainer}>
          <li className={styles.footerPoint}>Credits</li>
          <li className={styles.footerPoint}>Designs</li>
        </ul>
        <ul className={styles.footerSubSectionContainer}>
          <li className={styles.footerPoint}>Terms</li>
          <li className={styles.footerPoint}>Privacy Policy</li>
          <li className={styles.footerPoint}>Terms of Service</li>
        </ul>
        <ul className={styles.footerSubSectionContainer}>
          <li className={styles.footerPoint}>Community</li>
          <li className={styles.footerPoint}>Discord</li>
          <li className={styles.footerPoint}>YouTube</li>
          <li className={styles.footerPoint}>Blog</li>
        </ul>
      </div>
    </div>
  );
}

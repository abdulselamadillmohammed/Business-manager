import styles from "../assets/css/dashboardSidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import dashboardInactive from "../assets/icons/dashboardNormalIcon.png";
import dashboardActive from "../assets/icons/dashboardIconActive.png";

import transactionsInactive from "../assets/icons/transactionsNormalIcon.png";
import transactionsActive from "../assets/icons/transactionsIconActive.png";

import settingsInactive from "../assets/icons/settingsIconNormal.png";
import settingsActive from "../assets/icons/settingsIconActive.png";

import logoutInactive from "../assets/icons/logoutIconNormal.png";
import logoutActive from "../assets/icons/logoutIconActive.png";

import sampleCompanyImage from "../assets/images/sampleCompanyImage.png";
import sampleProfilePicture from "../assets/images/sampleProfilePicture.png";

export default function DashboardSidebar() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className={styles.dashboardSidebarContainer}>
        <div className={styles.dashboardCompanyLogoContainer}>
          <img
            className={styles.sidebarCompanyLogo}
            src={sampleCompanyImage}
            alt="Company image"
          />
        </div>

        <div className={styles.dashboardNavigationContainer}>
          <Link
            to="/dashboard"
            className={
              location.pathname === "/dashboard"
                ? styles.dashboardNavigationItemContainerActive
                : styles.dashboardNavigationItemContainer
            }
            onMouseEnter={() => setIsHovered("dashboard")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img
              src={
                location.pathname === "/dashboard" || isHovered === "dashboard"
                  ? dashboardActive
                  : dashboardInactive
              }
              alt="Dashboard Icon"
              className={styles.naviagtionItemIcon}
            />
            <p
              className={
                location.pathname === "/dashboard" || isHovered === "dashboard"
                  ? styles.naviagtionItemTextActive
                  : styles.naviagtionItemText
              }
            >
              Dashboard
            </p>
          </Link>

          <Link
            to="/transactions"
            className={
              location.pathname === "/transactions"
                ? styles.dashboardNavigationItemContainerActive
                : styles.dashboardNavigationItemContainer
            }
            onMouseEnter={() => setIsHovered("transactions")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img
              src={
                location.pathname === "/transactions" ||
                isHovered === "transactions"
                  ? transactionsActive
                  : transactionsInactive
              }
              alt="Transactions Icon"
              className={styles.naviagtionItemIcon}
            />
            <p
              className={
                location.pathname === "/transactions" ||
                isHovered === "transactions"
                  ? styles.naviagtionItemTextActive
                  : styles.naviagtionItemText
              }
            >
              Transactions
            </p>
          </Link>

          <Link
            to="/settings"
            className={
              location.pathname === "/settings"
                ? styles.dashboardNavigationItemContainerActive
                : styles.dashboardNavigationItemContainer
            }
            onMouseEnter={() => setIsHovered("settings")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img
              src={
                location.pathname === "/settings" || isHovered === "settings"
                  ? settingsActive
                  : settingsInactive
              }
              alt="Settings Icon"
              className={styles.naviagtionItemIcon}
            />
            <p
              className={
                location.pathname === "/settings" || isHovered === "settings"
                  ? styles.naviagtionItemTextActive
                  : styles.naviagtionItemText
              }
            >
              Settings
            </p>
          </Link>

          <Link
            to="/logout"
            className={
              location.pathname === "/logout"
                ? styles.dashboardNavigationItemContainerActive
                : styles.dashboardNavigationItemContainer
            }
            onMouseEnter={() => setIsHovered("logout")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img
              src={
                location.pathname === "/logout" || isHovered === "logout"
                  ? logoutActive
                  : logoutInactive
              }
              alt="Logout icon"
              className={styles.naviagtionItemIcon}
            />
            <p
              className={
                location.pathname === "/logout" || isHovered === "logout"
                  ? styles.naviagtionItemTextActive
                  : styles.naviagtionItemText
              }
            >
              Logout
            </p>
          </Link>
        </div>

        <div className={styles.dashboardProfileContainer}>
          <img
            className={styles.dashboardProfileImage}
            src={sampleProfilePicture}
            alt="Profile picture"
          />
          <p className={styles.dashboardProfileText}>Admin user</p>
        </div>
      </div>
    </>
  );
}

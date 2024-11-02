import styles from "../assets/css/reminder.module.css";
import logo from "../assets/icons/calendarIcon.png";
export default function Reminder({ event_icon, event_title, event_date }) {
  return (
    <>
      <div className={styles.reminderContainer}>
        <div className={styles.reminderIconContainer}>
          <img className={styles.reminderIcon} src={logo} alt="Reminder icon" />
        </div>
        <div className={styles.reminderTextContainer}>
          <p className={styles.reminderMainText}>{event_title}</p>
          <p className={styles.reminderSupportingText}>
            11:00 am | 24th October, 2024
          </p>
        </div>
      </div>
    </>
  );
}

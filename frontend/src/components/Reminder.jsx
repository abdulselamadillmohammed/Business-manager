import styles from "../assets/css/reminder.module.css";
import logo from "../assets/icons/calendarIcon.png";
export default function Reminder({
  reminder_icon,
  reminder_title,
  reminder_date,
}) {
  return (
    <>
      <div className={styles.reminderContainer}>
        <div className={styles.reminderIconContainer}>
          <img className={styles.reminderIcon} src={logo} alt="Reminder icon" />
        </div>
        <div className={styles.reminderTextContainer}>
          <p className={styles.reminderMainText}>
            {reminder_title.length < 17
              ? reminder_title
              : `${reminder_title.slice(0, 14)}...`}
          </p>
          <p className={styles.reminderSupportingText}>
            11:00 am | 24th October, 2024
          </p>
        </div>
      </div>
    </>
  );
}

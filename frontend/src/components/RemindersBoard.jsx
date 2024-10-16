import styles from "../assets/css/remindersBoard.module.css";
import addLogo from "../assets/images/addIcon.png";
export default function RemindersBoard() {
  return (
    <>
      <div className={styles.remindersBoardContainer}>
        <div className="reminderTextAndButtonContainer">
          <p className={styles.reminderTitleText}>Reminders</p>

          <div className={styles.addReminderButtonContainer}>
            <img src={addLogo} alt="Add icon" className={styles.addLogo} />
            <p className={styles.addReminderButtonText}>Add reminder</p>
          </div>
        </div>
      </div>
    </>
  );
}

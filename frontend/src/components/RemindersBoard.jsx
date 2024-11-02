import styles from "../assets/css/remindersBoard.module.css";
import addLogo from "../assets/images/addIcon.png";
import Reminder from "./Reminder";
import { useAllReminders } from "../services/queries";
export default function RemindersBoard() {
  const { data, isLoading, isError } = useAllReminders();
  console.log(data);
  return isLoading ? (
    <p>Loading...</p>
  ) : isError ? (
    <p>Error</p>
  ) : (
    <>
      <div className={styles.remindersBoardContainer}>
        <div className={styles.reminderTextAndButtonContainer}>
          <p className={styles.reminderTitleText}>Reminders</p>

          <div className={styles.addReminderButtonContainer}>
            <img src={addLogo} alt="Add icon" className={styles.addLogo} />
            <p className={styles.addReminderButtonText}>Add reminder</p>
          </div>
        </div>
        {/* CREATE A MAPPING FUNCTION AND WRAP THE COMPONENT IN OVERFLOW-Y SCROLL */}

        {data.map((reminder, index) => (
          <Reminder
            key={index}
            event_icon={reminder?.event_icon}
            event_title={reminder?.event_title}
            event_date={reminder?.event_date}
          />
        ))}
      </div>
    </>
  );
}

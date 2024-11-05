import styles from "../assets/css/remindersBoard.module.css";
import addLogo from "../assets/images/addIcon.png";
import Reminder from "./Reminder";
import { useAllReminders } from "../services/queries";
import AddReminder from "./AddReminder";
import { useSelector, useDispatch } from "react-redux";
import { setIsAddingReminder } from "../features/exampleSlice";

export default function RemindersBoard() {
  const isAddingReminder = useSelector((state) => {
    state.example.isAddingReminder;
  });
  const dispatch = useDispatch();

  const startAddingReminder = () => {
    dispatch(setIsAddingReminder(true));
  };

  const stopAddingReminder = () => {
    dispatch(setIsAddingReminder(false));
  };

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

          <div
            className={styles.addReminderButtonContainer}
            onClick={startAddingReminder}
          >
            <img src={addLogo} alt="Add icon" className={styles.addLogo} />
            <p className={styles.addReminderButtonText}>Add reminder</p>
          </div>
        </div>
        {/* CREATE A MAPPING FUNCTION AND WRAP THE COMPONENT IN OVERFLOW-Y SCROLL */}
        <div className={styles.allRemindersContainer}>
          {data.map((reminder, index) => (
            <Reminder
              key={index}
              reminder_icon={reminder?.reminder_icon}
              reminder_title={reminder?.reminder_title}
              reminder_date={reminder?.reminder_date}
            />
          ))}
        </div>
        <AddReminder />
      </div>
    </>
  );
}

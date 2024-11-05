import { useState, useEffect, useRef } from "react";
import styles from "../assets/css/addReminder.module.css";
import { useCreateReminder } from "../services/mutations";
import { useSelector, useDispatch } from "react-redux";
import { setIsAddingReminder } from "../features/exampleSlice";
import dateIcon from "../assets/icons/dateIcon.png";
import cardIcon from "../assets/icons/cardIcon.png";
import mailIcon from "../assets/icons/mailIcon.png";
import notificationIcon from "../assets/icons/notificationIcon.png";

export default function AddReminder() {
  const dispatch = useDispatch();
  const isAddingReminder = useSelector(
    (state) => state.example.isAddingReminder
  );
  const containerRef = useRef(null);
  const stopAddingReminder = () => {
    dispatch(setIsAddingReminder(false));
  };

  const reminderMutation = useCreateReminder();
  const [formData, setFormData] = useState({
    user: "",
    reminder_title: "",
    reminder_date: "",
    reminder_time: "",
    reminder_icon: "",
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        dispatch(setIsAddingReminder(false)); // Set to false if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
    };
  }, [dispatch]);
  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Combine date and time into a DateTime string
    const combinedDateTime = `${formData.reminder_date}T${formData.reminder_time}`;

    // Update formData with the combined datetime
    const updatedFormData = {
      ...formData,
      reminder_date: combinedDateTime,
    };

    // Send the updated formData with combined DateTime
    reminderMutation.mutate(updatedFormData);
    stopAddingReminder();
  };

  return (
    <>
      <div
        className={
          isAddingReminder
            ? styles.addReminderContainer
            : styles.addReminderContainerOff
        }
        ref={containerRef}
      >
        <section className={styles.addReminderMainText}>Reminder</section>

        <form className={styles.addReminderForm}>
          <section className={styles.labelAndInputContainer}>
            <label htmlFor="reminder_title" className={styles.addReminderLabel}>
              Reminder title
            </label>
            <input
              type="text"
              name="reminder_title"
              id="reminder_title"
              onChange={handleFormDataChange}
              value={formData.reminder_title}
              placeholder="Enter event title"
              className={styles.addReminderInput}
            />
          </section>

          <section className={styles.labelAndInputContainer}>
            <label htmlFor="reminder_date" className={styles.addReminderLabel}>
              Date
            </label>
            <input
              type="date"
              name="reminder_date"
              id="reminder_date"
              onChange={handleFormDataChange}
              value={formData.reminder_date}
              className={styles.addReminderInput}
            />
          </section>

          <section className={styles.labelAndInputContainer}>
            <label htmlFor="reminder_time" className={styles.addReminderLabel}>
              Time
            </label>
            <input
              type="time"
              name="reminder_time"
              id="reminder_time"
              onChange={handleFormDataChange}
              value={formData.reminder_time}
              className={styles.addReminderInput}
            />
          </section>

          <section className={styles.labelAndInputContainer}>
            <label htmlFor="reminder_icon" className={styles.addReminderLabel}>
              Icon
            </label>
            <div className={styles.addReminderIconsContainer}>
              <div
                className={
                  formData.reminder_icon === "date"
                    ? styles.reminderIconContainerFocus
                    : styles.reminderIconContainer
                }
                onClick={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    reminder_icon: "date",
                  }))
                }
              >
                <img
                  src={dateIcon}
                  alt="Date icon"
                  className={styles.addReminderIconImage}
                />
              </div>
              <div
                className={
                  formData.reminder_icon === "card"
                    ? styles.reminderIconContainerFocus
                    : styles.reminderIconContainer
                }
                onClick={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    reminder_icon: "card",
                  }))
                }
              >
                <img
                  src={cardIcon}
                  alt="Card icon"
                  className={styles.addReminderIconImage}
                />
              </div>
              <div
                className={
                  formData.reminder_icon === "mail"
                    ? styles.reminderIconContainerFocus
                    : styles.reminderIconContainer
                }
                onClick={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    reminder_icon: "mail",
                  }))
                }
              >
                <img
                  src={mailIcon}
                  alt="Mail icon"
                  className={styles.addReminderIconImage}
                />
              </div>
              <div
                className={
                  formData.reminder_icon === "notification"
                    ? styles.reminderIconContainerFocus
                    : styles.reminderIconContainer
                }
                onClick={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    reminder_icon: "notification",
                  }))
                }
              >
                <img
                  src={notificationIcon}
                  alt="Notification icon"
                  className={styles.addReminderIconImage}
                />
              </div>
            </div>
          </section>

          <div className={styles.addReminderButton} onClick={handleFormSubmit}>
            Add +
          </div>
        </form>
      </div>
    </>
  );
}

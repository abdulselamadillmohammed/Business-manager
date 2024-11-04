import { useState } from "react";
import styles from "../assets/css/addReminder.module.css";
import { useCreateReminder } from "../services/mutations";

export default function AddReminder() {
  const reminderMutation = useCreateReminder();
  const [formData, setFormData] = useState({
    user: "",
    reminder_title: "",
    reminder_date: "",
    reminder_time: "",
    reminder_icon: "",
  });

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    reminderMutation.mutate(formData);
  };

  return (
    <>
      <div className={styles.addReminderContainer}>
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
              ></div>
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
              ></div>
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
              ></div>
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
              ></div>
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

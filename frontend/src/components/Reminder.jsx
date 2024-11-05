import styles from "../assets/css/reminder.module.css";
import dateIcon from "../assets/icons/dateIcon.png";
import cardIcon from "../assets/icons/cardIcon.png";
import mailIcon from "../assets/icons/mailIcon.png";
import notificationIcon from "../assets/icons/notificationIcon.png";

export default function Reminder({
  reminder_icon,
  reminder_title,
  reminder_date,
}) {
  function formatReminderDate(isoDate) {
    const date = new Date(isoDate);

    // Get the time in 12-hour format with AM/PM
    const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
    const timeString = new Intl.DateTimeFormat("en-US", timeOptions).format(
      date
    );

    // Get the date in "October 24th, 2024" format with ordinal suffix
    const dateOptions = { month: "long", year: "numeric" };
    const monthYearString = new Intl.DateTimeFormat(
      "en-US",
      dateOptions
    ).format(date);

    // Adding ordinal suffix (st, nd, rd, th) for the day
    const day = date.getDate();
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    return `${timeString} | ${day}${suffix} ${monthYearString}`;
  }

  const formattedDate = formatReminderDate(reminder_date);

  return (
    <>
      <div className={styles.reminderContainer}>
        <div className={styles.reminderIconContainer}>
          <img
            className={styles.reminderIcon}
            src={
              reminder_icon === "date"
                ? dateIcon
                : reminder_icon === "card"
                ? cardIcon
                : reminder_icon === "mail"
                ? mailIcon
                : notificationIcon
            }
            alt="Reminder icon"
          />
        </div>
        <div className={styles.reminderTextContainer}>
          <p className={styles.reminderMainText}>
            {reminder_title.length < 23
              ? reminder_title
              : `${reminder_title.slice(0, 20)}...`}
          </p>
          <p className={styles.reminderSupportingText}>
            {formattedDate}
            {/*11:00 am | 24th October, 2024*/}
          </p>
        </div>
      </div>
    </>
  );
}

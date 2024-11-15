import styles from "../assets/css/addTransaction.module.css";
import shoppingTransaction from "../assets/icons/shoppingTransaction.png";
import utilitiesIcon from "../assets/icons/utilitiesTransaction.png";
import transportationIcon from "../assets/icons/transportationTransaction.png";
import salaryTransaction from "../assets/icons/salaryTransaction.png";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsAddingTranaction } from "../features/exampleSlice";
import { useCreateTransaction } from "../services/mutations";

export default function AddTransaction() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const isAddingTransaction = useSelector(
    (state) => state.example.isAddingTransaction
  );
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        stopAddingTransaction();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  const stopAddingTransaction = () => {
    dispatch(setIsAddingTranaction(false));
  };
  const [formData, setFormData] = useState({
    user: "",
    transaction_icon: "",
    transaction_title: "",
    transaction_detail: "",
    transaction_type: "R",
    transaction_price: "",
  });
  const transactionMutation = useCreateTransaction();
  const handleFormDataChange = (e) => {
    console.log(`Field changed: ${e.target.name}, Value: ${e.target.value}`); // Debugging output

    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    const dataTosSend = {
      ...formData,
      transaction_price: parseFloat(formData.transaction_price),
    };
    transactionMutation.mutate(formData);
    stopAddingTransaction();
  };
  return (
    <>
      <div
        ref={formRef}
        className={
          isAddingTransaction
            ? styles.addTransactionContainer
            : styles.addTransactionContainerOff
        }
      >
        <p className={styles.addTransactionHeader}>Transaction</p>
        <div className={styles.transactionInputContainer}>
          <label
            className={styles.transactionTextLabel}
            htmlFor="transaction_title"
          >
            Transaction title
          </label>
          <input
            className={styles.transactionTextInput}
            type="text"
            id="transaction_title"
            name="transaction_title"
            placeholder="Enter transaction title"
            onChange={handleFormDataChange}
            value={formData.transaction_title}
          />
        </div>

        <div className={styles.transactionInputContainer}>
          <label
            className={styles.transactionTextLabel}
            htmlFor="transaction_detail"
          >
            Transaction details
          </label>
          <input
            className={styles.transactionTextInput}
            type="text"
            value={formData.transaction_detail}
            onChange={handleFormDataChange}
            id="transaction_detail"
            name="transaction_detail"
            placeholder="Enter transaction details"
          />
        </div>

        <div className={styles.transactionInputContainer}>
          <label
            className={styles.transactionTextLabel}
            htmlFor="transaction_price"
          >
            Transaction price
          </label>
          <input
            className={styles.transactionTextInput}
            type="number"
            id="transaction_price"
            name="transaction_price"
            placeholder="Enter transaction price"
            onChange={handleFormDataChange} // Add this line
            value={formData.transaction_price} // Add this line
          />
        </div>

        <div className={styles.transactionTypeContainer}>
          <label
            className={styles.transactionTextLabel}
            htmlFor="transaction_type"
          >
            Choose an option:
          </label>
          <select
            id="transaction_type"
            name="transaction_type"
            onChange={handleFormDataChange} // Add this line
            value={formData.transaction_type} // Add this line
          >
            <option value="R">Revenue</option>
            <option value="E">Expenses</option>
          </select>
        </div>
        <div>
          <p className={styles.icconSelectorText}>Icon</p>
          <div className={styles.addTransactionIconPicker}>
            <div
              onClick={() =>
                setFormData((prevData) => ({
                  ...prevData,
                  transaction_icon: "shopping",
                }))
              }
              className={
                formData.transaction_icon === "shopping"
                  ? styles.iconContainerActive
                  : styles.iconContainer
              }
            >
              <img
                className={styles.addTransactionIcon}
                src={shoppingTransaction}
                alt="Shopping transaction icon"
              />
            </div>
            <div
              onClick={() =>
                setFormData((prevData) => ({
                  ...prevData,
                  transaction_icon: "utilities",
                }))
              }
              className={
                formData.transaction_icon === "utilities"
                  ? styles.iconContainerActive
                  : styles.iconContainer
              }
            >
              <img
                className={styles.addTransactionIcon}
                src={utilitiesIcon}
                alt="Utilities transaction icon"
              />
            </div>
            <div
              onClick={() =>
                setFormData((prevData) => ({
                  ...prevData,
                  transaction_icon: "transport",
                }))
              }
              className={
                formData.transaction_icon === "transport"
                  ? styles.iconContainerActive
                  : styles.iconContainer
              }
            >
              <img
                className={styles.addTransactionIcon}
                src={transportationIcon}
                alt="Shopping transaction icon"
              />
            </div>
            <div
              onClick={() =>
                setFormData((prevData) => ({
                  ...prevData,
                  transaction_icon: "salary",
                }))
              }
              className={
                formData.transaction_icon === "salary"
                  ? styles.iconContainerActive
                  : styles.iconContainer
              }
            >
              <img
                className={styles.addTransactionIcon}
                src={salaryTransaction}
                alt="Salary transaction icon"
              />
            </div>
          </div>
        </div>
        <div className={styles.addTransactionButton} onClick={handleFormSubmit}>
          Add +
        </div>
      </div>
    </>
  );
}

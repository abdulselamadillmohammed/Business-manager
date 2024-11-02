import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getAllTransactions = async () => {
  return (await axiosInstance.get("allTransactions/")).data;
};
export const getAllReminders = async () => {
  return (await axiosInstance.get("allReminders/")).data;
};

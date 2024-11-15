import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

// JWT-specific setup
const getAccessToken = () => localStorage.getItem("accessToken");
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Functions for transactions and reminders
export const getAllTransactions = async () => {
  return (await axiosInstance.get("allTransactions/")).data;
};

export const getAllReminders = async () => {
  return (await axiosInstance.get("allReminders/")).data;
};

export const createReminder = async (data) => {
  await axiosInstance.post("createReminder/", data);
};

export const createTransaction = async (data) => {
  await axiosInstance.post("createTransaction/", data);
};

// Functions for authentication
export const signup = async (data) => {
  return (await axiosInstance.post("signup/", data)).data;
};

export const login = async (credentials) => {
  const response = await axiosInstance.post("token/", credentials);
  // Save tokens to localStorage
  localStorage.setItem("accessToken", response.data.access);
  localStorage.setItem("refreshToken", response.data.refresh);
  return response.data;
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new Error("No refresh token available");
  const response = await axiosInstance.post("token/refresh/", {
    refresh: refreshToken,
  });
  localStorage.setItem("accessToken", response.data.access);
  return response.data;
};

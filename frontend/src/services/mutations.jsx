import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReminder, createTransaction, signup, login } from "./api";

// Mutation for creating a reminder
export function useCreateReminder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createReminder(data),
    onError: () => {
      console.log("ERROR");
    },
    onSuccess: () => {
      console.log("Reminder created successfully!");
    },
    onSettled: async (_, error) => {
      if (!error) {
        await queryClient.invalidateQueries({ queryKey: ["allReminders"] });
      }
    },
  });
}

// Mutation for creating a transaction
export function useCreateTransaction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTransaction,
    onError: () => {
      console.log("ERROR");
    },
    onSuccess: () => {
      console.log("Transaction created successfully!");
    },
    onSettled: async (_, error) => {
      if (!error) {
        queryClient.invalidateQueries({ queryKey: ["allTransactions"] });
      }
    },
  });
}

// Mutation for user signup
export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
    onError: (error) => {
      console.error("Signup failed:", error.response?.data);
    },
    onSuccess: () => {
      console.log("User signed up successfully!");
    },
  });
};

// Mutation for user login
export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onError: (error) => {
      console.error("Login failed:", error.response?.data);
    },
    onSuccess: (data) => {
      console.log("Login successful!");
      // Store tokens in localStorage
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
    },
  });
};

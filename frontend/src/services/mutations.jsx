import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReminder, createTransaction } from "./api";

export function useCreateReminder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => createReminder(data),
    onMutate: () => {},
    onError: () => {
      console.log("ERROR");
    },
    onSuccess: () => {
      console.log("It worked");
    },
    onSettled: async (_, error) => {
      if (error) {
        // Redirect to error page
      } else {
        await queryClient.invalidateQueries({ queryKey: ["allReminders"] });
      }
    },
  });
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTransaction,
    onMutate: () => {},
    onError: () => {
      console.log("ERROR");
    },
    onSuccess: () => {
      console.log("It worked");
    },
    onSettled: async (_, error) => {
      if (error) {
        // Deal with redirecting to 404 page
      } else {
        queryClient.invalidateQueries({ queryKey: ["allTransactions"] });
      }
    },
  });
}

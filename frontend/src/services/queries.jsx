import { useQuery } from "@tanstack/react-query";
import { getAllTransactions, getAllReminders, getUserDetails } from "./api";

export function useAllTransactions() {
  return useQuery({
    queryKey: ["allTransactions"],
    queryFn: getAllTransactions,
  });
}
export function useAllReminders() {
  return useQuery({
    queryKey: ["allReminders"],
    queryFn: getAllReminders,
  });
}

export const useCurrentUser = (token) => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: () => getUserDetails(token),
    enabled: !!token,
  });
};

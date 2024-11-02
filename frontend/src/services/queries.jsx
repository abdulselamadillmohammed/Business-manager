import { useQuery } from "@tanstack/react-query";
import { getAllTransactions, getAllReminders } from "./api";

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

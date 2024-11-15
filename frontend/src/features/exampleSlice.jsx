import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: {
    data: null,
    isLoading: false,
    isAddingReminder: false,
    isAddingTransaction: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsAddingReminder: (state, action) => {
      state.isAddingReminder = action.payload;
    },
    setIsAddingTranaction: (state, action) => {
      state.isAddingTransaction = action.payload;
    },
  },
});

export const {
  setData,
  setLoading,
  setIsAddingReminder,
  setIsAddingTranaction,
} = exampleSlice.actions;
export default exampleSlice.reducer;

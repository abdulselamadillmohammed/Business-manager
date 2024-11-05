import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: {
    data: null,
    isLoading: false,
    isAddingReminder: false,
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
  },
});

export const { setData, setLoading, setIsAddingReminder } =
  exampleSlice.actions;
export default exampleSlice.reducer;

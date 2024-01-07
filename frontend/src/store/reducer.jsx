import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value = 2;
    },
  },
});

export const {increase} = counterSlice.actions;

export default counterSlice.reducer;

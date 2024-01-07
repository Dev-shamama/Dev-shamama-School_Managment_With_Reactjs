import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminReducer";
import studentSlice from "./studentReducer";
import feesSlice from "./feeReducer";
import examSlice from "./examReducer";
import marksSlice from "./marksReducer";
import contactSlice from "./contactReducer";

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    students: studentSlice,
    fees: feesSlice,
    exam: examSlice,
    marks: marksSlice,
    contact: contactSlice
  },
});

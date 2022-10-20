import { configureStore } from "@reduxjs/toolkit";
import { rowsReducer } from "../data/sliceRows";

export const store = configureStore({
  reducer: {
    rows: rowsReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

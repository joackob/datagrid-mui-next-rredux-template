import { configureStore } from "@reduxjs/toolkit";
import { rowsReducer } from "../data/slices/sliceRows";
import { rowsSelectedReducer } from "../data/slices/sliceRowsSelected";

export const store = configureStore({
  reducer: {
    rows: rowsReducer,
    rowsSelected: rowsSelectedReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

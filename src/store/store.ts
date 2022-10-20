import { configureStore } from "@reduxjs/toolkit";
import { idsSelectedReducer } from "../data/sliceIdsSelected";
import { rowsReducer } from "../data/sliceRows";

export const store = configureStore({
  reducer: {
    idsSelected: idsSelectedReducer,
    rows: rowsReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

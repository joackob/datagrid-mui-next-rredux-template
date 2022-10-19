import { configureStore } from "@reduxjs/toolkit";
import { idsSelectedReducer } from "./sliceIdsSelected";
import { rowsReducer } from "./sliceRows";

export const store = configureStore({
  reducer: {
    idsSelected: idsSelectedReducer,
    rows: rowsReducer,
  },
});

export type TStoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

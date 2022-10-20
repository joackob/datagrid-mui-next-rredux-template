import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "../admin/sliceAdmin";

export const store = configureStore({
  reducer: {
    admins: adminReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

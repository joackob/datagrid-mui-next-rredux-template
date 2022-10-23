import { configureStore } from "@reduxjs/toolkit";
import { adminsReducer } from "../admins/slices/sliceAdmins";

export const store = configureStore({
  reducer: {
    admins: adminsReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

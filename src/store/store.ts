import { configureStore } from "@reduxjs/toolkit";
import { adminsReducer } from "../admins/slices/sliceAdmins";
import { adminsSelectedReducer } from "../admins/slices/sliceAdminsSelected";

export const store = configureStore({
  reducer: {
    admins: adminsReducer,
    adminsSelected: adminsSelectedReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

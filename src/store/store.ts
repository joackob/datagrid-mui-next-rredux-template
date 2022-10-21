import { configureStore } from "@reduxjs/toolkit";
import { adminsReducer } from "../admins/slices/sliceAdmins";
import { adminsSelectedReducer } from "../admins/slices/sliceAdminsSelected";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    admins: adminsReducer,
    adminsSelected: adminsSelectedReducer,
  },
  middleware: [thunk],
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

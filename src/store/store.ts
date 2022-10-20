import { configureStore } from "@reduxjs/toolkit";
import { idsSelectedReducer } from "../admin/sliceIdsSelected";
import { adminReducer } from "../admin/sliceAdmin";

export const store = configureStore({
  reducer: {
    idsSelected: idsSelectedReducer,
    admins: adminReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

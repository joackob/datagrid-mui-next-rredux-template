import { configureStore } from "@reduxjs/toolkit";
import { entitiesReducer } from "../data/slices/sliceEntity";

export const store = configureStore({
  reducer: {
    entities: entitiesReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

const adminsSelectedSlice = createSlice({
  name: "adminsSelected",
  initialState: initialState,
  reducers: {
    set(_, action: PayloadAction<string[]>) {
      const { payload: selected } = action;
      return selected;
    },
  },
});

export const adminsSelectedReducer = adminsSelectedSlice.reducer;
export const adminsSelected = adminsSelectedSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

const adminsSelectedSlice = createSlice({
  name: "adminsSelected",
  initialState: initialState,
  reducers: {
    selectAdmins(_, action: PayloadAction<string[]>) {
      const { payload: selected } = action;
      return selected;
    },
  },
});

export const adminsSelectedReducer = adminsSelectedSlice.reducer;
export const { selectAdmins } = adminsSelectedSlice.actions;

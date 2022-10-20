import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

const rowsSelectedSlice = createSlice({
  name: "rowsSelected",
  initialState: initialState,
  reducers: {
    set(_, action: PayloadAction<string[]>) {
      const { payload: ids } = action;
      return ids;
    },
  },
});

export const rowsSelectedReducer = rowsSelectedSlice.reducer;
// options: choice just one
export const { set } = rowsSelectedSlice.actions;
export const rowsSelected = rowsSelectedSlice.actions;

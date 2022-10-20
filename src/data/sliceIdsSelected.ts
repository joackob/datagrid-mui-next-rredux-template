import {
  createSlice,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";

const initialState: string[] = [];

const idsSelectedSlice = createSlice({
  name: "idsSelected",
  initialState: initialState,
  reducers: {
    setIdsSelected(_, { payload: ids }: PayloadAction<string[]>) {
      return ids;
    },
  },
});

export const idsSelectedReducer = idsSelectedSlice.reducer;
export const { setIdsSelected } = idsSelectedSlice.actions;

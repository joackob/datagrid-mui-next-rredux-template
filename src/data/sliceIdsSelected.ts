import {
  createSlice,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";

const initialState: string[] = [];

const options: CreateSliceOptions = {
  name: "idsSelected",
  initialState: initialState,
  reducers: {
    setIdsSelected(_, { payload: ids }: PayloadAction<string[]>) {
      return ids;
    },
  },
};

const idsSelectedSlice = createSlice(options);
export const idsSelectedReducer = idsSelectedSlice.reducer;
export const { setIdsSelected } = idsSelectedSlice.actions;

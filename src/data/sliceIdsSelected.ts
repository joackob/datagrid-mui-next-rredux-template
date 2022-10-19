import {
  createSlice,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";

interface IState {
  idsSelected: Array<string>;
}

const initialState: IState = {
  idsSelected: new Array<string>(),
};

const options: CreateSliceOptions = {
  name: "idsSelected",
  initialState: initialState,
  reducers: {
    setIdsSelected(_, { payload: ids }: PayloadAction<string[]>) {
      return {
        idsSelected: ids,
      };
    },
  },
};

const idsSelectedSlice = createSlice(options);
export const idsSelectedReducer = idsSelectedSlice.reducer;
export const { setIdsSelected } = idsSelectedSlice.actions;

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Admin, AdminProps } from "../interfaces";
import { getAdmins, postAdmin } from "../service";

export type AdminsState = {
  values: Admin[];
  selected: number[];
  status: string;
};

const initialState: AdminsState = {
  values: [],
  selected: [],
  status: "loading", //can be "loading", "online", "error"
};

const adminsSlice = createSlice({
  name: "admins",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(set.fulfilled, (state, action: PayloadAction<Admin[]>) => {
      const { payload: admins } = action;
      return {
        ...state,
        values: admins,
        status: "online",
      };
    });
    builder.addCase(set.rejected, (state) => {
      return {
        ...state,
        status: "error",
      };
    });
    builder.addCase(set.pending, (state) => {
      return {
        ...state,
        status: "loading",
      };
    });
    builder.addCase(add.fulfilled, (state, action: PayloadAction<Admin>) => {
      const { payload: admin } = action;
      return {
        ...state,
        values: [admin, ...state.values],
      };
    });
  },
});

export const adminsReducer = adminsSlice.reducer;

export const add = createAsyncThunk(
  "admin/post",
  async (data: AdminProps) => await postAdmin(data)
);

export const set = createAsyncThunk(
  "admins/get",
  async () => await getAdmins()
);

export const admins = {
  add,
  set,
};

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Admin } from "../interfaces";
import { getAdmins, postAdmin, PostAdmin } from "../service";

export const adminAdapter = createEntityAdapter<Admin>({
  selectId: (admin: Admin) => admin.id,
  sortComparer: (a: Admin, b: Admin) => a.id - b.id,
});

const adminsSlice = createSlice({
  name: "admins",
  initialState: adminAdapter.getInitialState(),
  reducers: {
    addOne: adminAdapter.addOne,
    addMany: adminAdapter.addMany,
    removeMany: adminAdapter.removeMany,
    setAll: adminAdapter.setAll,
    updateMany: adminAdapter.updateMany,
  },
  extraReducers: (builder) => {
    builder.addCase(
      setAdmins.fulfilled,
      (state, action: PayloadAction<Admin[]>) => {
        const { payload: data } = action;
        adminAdapter.setAll(state, data);
      }
    );
    builder.addCase(
      addAdmin.fulfilled,
      (state, action: PayloadAction<Admin>) => {
        const { payload: data } = action;
        adminAdapter.addOne(state, data);
      }
    );
  },
});

export const adminsReducer = adminsSlice.reducer;
export const admins = adminsSlice.actions;

export const addAdmin = createAsyncThunk(
  "admin/post",
  async (data: PostAdmin) => await postAdmin(data)
);

export const setAdmins = createAsyncThunk(
  "admins/get",
  async () => await getAdmins()
);

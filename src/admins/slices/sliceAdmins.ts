import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Admin {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
}

const initialState: Admin[] = [];

const adminsSlice = createSlice({
  name: "admins",
  initialState: initialState,
  reducers: {
    set(_, action: PayloadAction<Admin[]>) {
      const { payload: admins } = action;
      return admins;
    },
    add(state, action: PayloadAction<Admin>) {
      const { payload: admin } = action;
      return [admin, ...state];
    },
    deleteMany(state, action: PayloadAction<string[]>) {
      const { payload: idsToDelete } = action;
      return state.filter((admin) => !idsToDelete.includes(admin.id));
    },
  },
});

export const adminsReducer = adminsSlice.reducer;
export const admins = adminsSlice.actions;

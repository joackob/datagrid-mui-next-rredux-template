import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Admin {
  id: string;
  nombre: string;
  apellido: string;
  email: number;
}

const admins: Admin[] = [];

const adminsSlice = createSlice({
  name: "admins",
  initialState: admins,
  reducers: {
    setAdmins(_, { payload: admins }: PayloadAction<Admin[]>) {
      return admins;
    },
  },
});

export const adminReducer = adminsSlice.reducer;
export const { setAdmins } = adminsSlice.actions;

import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export interface Admin {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  url?: string;
}

export const adminAdapter = createEntityAdapter<Admin>({
  selectId: (admin: Admin) => admin.id,
  sortComparer: (a: Admin, b: Admin) => a.id.localeCompare(b.id),
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
});

export const adminsReducer = adminsSlice.reducer;
export const admins = adminsSlice.actions;

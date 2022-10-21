import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Admin {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  url: string;
}

export interface SliceAdmin {
  data: Admin[];
  apiUrlAdmin: string;
  apiUrlAdmins: string;
}

const initialState: SliceAdmin = {
  data: [],
  apiUrlAdmin: "",
  apiUrlAdmins: "",
};

const adminsSlice = createSlice({
  name: "admins",
  initialState: initialState,
  reducers: {
    set(_, action: PayloadAction<SliceAdmin>) {
      const { payload: state } = action;
      return state;
    },
    add(state, action: PayloadAction<Admin>) {
      const { payload: admin } = action;
      return {
        ...state,
        data: [admin, ...state.data],
      };
    },
    deleteMany(state, action: PayloadAction<string[]>) {
      const { payload: idsToDelete } = action;
      return {
        ...state,
        data: state.data.filter((d) => !idsToDelete.includes(d.id)),
      };
    },
  },
});

export const adminsReducer = adminsSlice.reducer;
export const admins = adminsSlice.actions;

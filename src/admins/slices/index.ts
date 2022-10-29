import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Admin } from "../interfaces";
import { add, set, remove } from "../thunks";
import { StatusStateAdmins } from "../interfaces";

export type AdminsState = {
  values: Admin[];
  selected: number[];
  status: StatusStateAdmins;
};

const initialState: AdminsState = {
  values: [],
  selected: [],
  status: StatusStateAdmins.loading, //can be "loading", "online", "error"
};

const adminsSlice = createSlice({
  name: "admins",
  initialState: initialState,
  reducers: {
    select: (state, action: PayloadAction<number[]>) => {
      const { payload: selection } = action;
      return {
        ...state,
        selected: selection,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(set.fulfilled, (state, action: PayloadAction<Admin[]>) => {
      const { payload: admins } = action;
      return {
        ...state,
        values: admins,
        status: StatusStateAdmins.online,
      };
    });
    builder.addCase(set.rejected, (state) => {
      return {
        ...state,
        status: StatusStateAdmins.error,
      };
    });
    builder.addCase(set.pending, (state) => {
      return {
        ...state,
        status: StatusStateAdmins.loading,
      };
    });
    builder.addCase(add.fulfilled, (state, action: PayloadAction<Admin>) => {
      const { payload: admin } = action;
      const exist = state.values.some((a) => a.id === admin.id);
      return {
        ...state,
        values: exist ? state.values : [admin, ...state.values],
      };
    });
    builder.addCase(
      remove.fulfilled,
      (state, action: PayloadAction<number>) => {
        const { payload: removed } = action;
        const { values, selected } = state;
        const opCompleted = removed === state.selected.length;
        return opCompleted
          ? {
              ...state,
              values: values.filter((admin) => !selected.includes(admin.id)),
              selected: [],
            }
          : {
              ...state,
              status: StatusStateAdmins.error,
            };
      }
    );
  },
});

export const adminsReducer = adminsSlice.reducer;
export const { select } = adminsSlice.actions;

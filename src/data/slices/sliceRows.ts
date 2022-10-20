import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface IRow {
  id: string;
  lastName: string;
  firstName: string;
  age: number;
}

const initialState: IRow[] = [
  { id: uuid(), lastName: "Snow", firstName: "Jon", age: 35 },
  { id: uuid(), lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: uuid(), lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: uuid(), lastName: "Stark", firstName: "Arya", age: 16 },
  { id: uuid(), lastName: "Targaryen", firstName: "Daenerys", age: 12 },
  { id: uuid(), lastName: "Melisandre", firstName: "Casa", age: 150 },
  { id: uuid(), lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: uuid(), lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: uuid(), lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const rowsSlice = createSlice({
  name: "rows",
  initialState: initialState,
  reducers: {
    add(state, action: PayloadAction<IRow>) {
      const { payload: row } = action;
      return [row, ...state];
    },
    deleteMany(state, action: PayloadAction<string[]>) {
      const { payload: idsToDelete } = action;
      return state.filter((row) => !idsToDelete.includes(row.id));
    },
  },
});

export const rowsReducer = rowsSlice.reducer;
// options: choice just one
export const { add, deleteMany } = rowsSlice.actions;
export const rows = rowsSlice.actions;

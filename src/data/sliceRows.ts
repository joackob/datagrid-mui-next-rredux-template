import {
  createSlice,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
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

const options: CreateSliceOptions = {
  name: "rows",
  initialState: initialState,
  reducers: {
    setRows(_, { payload: rows }: PayloadAction<IRow[]>) {
      return rows;
    },
  },
};

const rowsSlice = createSlice(options);
export const rowsReducer = rowsSlice.reducer;
export const { setRows } = rowsSlice.actions;

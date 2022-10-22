import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export type PropsEntity = {
  lastName: string;
  firstName: string;
  age: number;
};

export type Entity = PropsEntity & {
  id: string;
};

export type EntitiesSliceState = {
  entities: Entity[];
  idsSelected: string[];
};

const initialEntities: Entity[] = [
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

const initialState: EntitiesSliceState = {
  entities: initialEntities,
  idsSelected: [],
};

const entitiesSlice = createSlice({
  name: "entities",
  initialState: initialState,
  reducers: {
    add(state, action: PayloadAction<PropsEntity>) {
      const entity = {
        id: uuid(),
        ...action.payload,
      };
      return {
        ...state,
        entities: [entity, ...state.entities],
      };
    },
    removeSelected(state) {
      return {
        ...state,
        entities: state.entities.filter(
          (entity) => !state.idsSelected.includes(entity.id)
        ),
      };
    },
    select(state, action: PayloadAction<string[]>) {
      const { payload: idsSelected } = action;
      return {
        ...state,
        idsSelected: idsSelected,
      };
    },
  },
});

export const entitiesReducer = entitiesSlice.reducer;
export const { add, removeSelected, select } = entitiesSlice.actions;

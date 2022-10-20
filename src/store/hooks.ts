import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { StoreState, StoreDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => StoreDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;

export const selectRows = (state: StoreState) => state.rows;
export const selectIdsSelected = (state: StoreState) => state.idsSelected;

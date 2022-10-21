import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { StoreState, StoreDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => StoreDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;

export const selectAllAdmins = (state: StoreState) => state.admins;
export const selectAdminsSelected = (state: StoreState) => state.adminsSelected;

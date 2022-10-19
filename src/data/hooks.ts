import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { TStoreState, StoreDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => StoreDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TStoreState> = useSelector;

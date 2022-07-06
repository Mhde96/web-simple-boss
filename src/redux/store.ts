import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import appSlice from "./app/appSlice";
import dataSlice from "./data/dataSlice";

export const store = configureStore({
  reducer: {
    appReducer: appSlice.reducer,
    dataReducer: dataSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app/appSlice";
import dataSlice from "./data/dataSlice";

export const store = configureStore({
  reducer: {
    appReducer: appSlice.reducer,
    dataReducer: dataSlice.reducer,
  },
});

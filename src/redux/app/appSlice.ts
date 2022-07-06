import { createSlice } from "@reduxjs/toolkit";
import { AppStateType, StatusType, userType } from "./app-type";
import { RootState } from "../store";
const initialState: AppStateType = {
  user: undefined,
  status: false,
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    changeStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const selectUser = (state: RootState): userType => state.appReducer.user;
export const selectStatus = (state: RootState): StatusType =>
  state.appReducer.status;

export default appSlice;

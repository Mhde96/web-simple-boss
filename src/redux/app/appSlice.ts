import { createSlice } from "@reduxjs/toolkit";
import { AppStateType, StatusType, userType } from "./app-type";
import { RootState } from "../store";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const initialState: AppStateType = {
  user: cookies.get("user"),
  status: false,
};


export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      cookies.set("user", payload);
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

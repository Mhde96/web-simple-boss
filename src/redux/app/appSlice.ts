import { createSlice } from "@reduxjs/toolkit";
import { AppStateType, StatusType, userType } from "./app-type";
import { RootState } from "../store";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const initialState: AppStateType = {
  user: cookies.get("user"),
  status: false,
  confirm: {
    show: false,
    title: "",
    message: "",
    handleSubmit: undefined,
  },
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
      cookies.set("user", { ...state.user, ...payload });
    },
    logout: (state) => {
      cookies.remove("user");
      state.user = { email: "", name: "", id: undefined };
    },
    changeStatus: (state, { payload }) => {
      state.status = payload;
    },
    openConfirmBox: (state, { payload }) => {
      state.confirm = {
        show: true,
        title: payload.title,
        message: payload.message,
        handleSubmit: payload.handleSubmit,
      };
    },
    closeConfirmBox: (state, { payload }) => {
      state.confirm = { ...initialState.confirm };
    },
  },
});

export const selectUser = (state: RootState): userType => state.appReducer.user;
export const selectStatus = (state: RootState): StatusType =>
  state.appReducer.status;

export default appSlice;

import { createSlice } from "@reduxjs/toolkit";
import { AppStateType, StatusType, userType } from "./app-type";
import { RootState } from "../store";
import { Cookies } from "react-cookie";
import { cookiesKey } from "../../constant/cookiesKey";
import i18n from "../../helper/i18n";

const cookies = new Cookies();

const getLanguage = () => {
  let language = cookies.get(cookiesKey.language);
  if (!language) {
    i18n.changeLanguage("default");
    return "default";
  } else {
    i18n.changeLanguage(language);
    return language;
  }
};
const initialState: AppStateType = {
  user: cookies.get("user"),
  status: false,
  colorMode: "light",
  language: getLanguage(),
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
    colorMode: (state, { payload }) => {
      if (payload) state.colorMode = payload;
      else state.colorMode = state.colorMode == "dark" ? "light" : "dark";
    },

    language: (state, { payload }) => {
      cookies.set(cookiesKey.language, payload);
      i18n.changeLanguage(payload);
      state.language = payload;
    },
  },
});

export const selectUser = (state: RootState): userType => state.appReducer.user;
export const selectStatus = (state: RootState): StatusType =>
  state.appReducer.status;
export const selectColorMode = (state: RootState): string =>
  state.appReducer.colorMode;

export default appSlice;

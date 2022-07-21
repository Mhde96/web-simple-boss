import { endpoints } from "../../constant/endpoints";
import { api } from "../../helper/api";
import { StatusType, userType } from "./app-type";
import appSlice from "./appSlice";
import { AppDispatch } from "../store";

import { Dispatch } from "@reduxjs/toolkit";
import { endroutes } from "../../constant/endroutes";
import { NavigateFunction } from "react-router-dom";

export const registerAsync =
  (values: userType, navigate: NavigateFunction) =>
  async (dispatch: AppDispatch) => {
    console.log(values);
    dispatch(changeStatusSync(true));

    api
      .post(endpoints.register, values)
      .then((response) => {
        if (response.data.success) {
          dispatch(appSlice.actions.login(response.data.data));
          navigate(endroutes.thankyou);
        }
      })
      .catch(() => {})
      .finally(() => {
        dispatch(changeStatusSync(false));
      });
  };

export const changeStatusSync =
  (status: StatusType) => (dispatch: AppDispatch) => {
    dispatch(appSlice.actions.changeStatus(status));
  };

export const loginAsync =
  (values: { email: string; password: string }, navigate: NavigateFunction) =>
  async (dispatch: AppDispatch) => {
    dispatch(changeStatusSync(true));
    api
      .post(endpoints.login, values)
      .then((response) => {
        if (response.data.success) {
          dispatch(appSlice.actions.login(response.data.data));
          navigate(endroutes.thankyou);
        } else {
          alert(response.data.msg);
        }
      })
      .catch(() => {})
      .finally(() => {
        dispatch(changeStatusSync(false));
      });
  };

export const refreshTokenAsync = () => async (dispatch: AppDispatch) => {
  api.post(endpoints.refreshToken).then((response) => {
    if (response.data.success) {
      dispatch(appSlice.actions.login({ token: response.data.data }));
    }
  });
};

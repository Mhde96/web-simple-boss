import { endpoints } from "../../constant/endpoints";
import { api } from "../../helper/api";
import { dbType, StatusType, userType } from "./app-type";
import appSlice from "./appSlice";
import { AppDispatch } from "../store";

import { endroutes } from "../../constant/endroutes";
import { NavigateFunction } from "react-router-dom";
import { Cookies } from "react-cookie";
import { cookiesKey } from "../../constant/cookiesKey";
import { selectSpecificDataIndexedDb } from "../../db/data/dataDb";

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
        console.log('test new response')
        console.log(response)
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
  const db = await selectSpecificDataIndexedDb();
  dispatch(changeDbAsync(db));

  api.post(endpoints.refreshToken).then((response) => {
    if (response.data.success) {
      dispatch(appSlice.actions.login({ token: response.data.data }));
    }
  });
};

export const logoutAsync = () => async (dispatch: AppDispatch) => {
  dispatch(appSlice.actions.logout());
};

export const changeDbAsync =
  (values: dbType) => async (dispatch: AppDispatch) => {
    const cookies = new Cookies();
    cookies.set(cookiesKey.dbId, values?.id);
    dispatch(appSlice.actions.changeDb(values));
  };

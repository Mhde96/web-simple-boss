import { endpoints } from "../../constant/endpoints";
import { accountType } from "../../containers/accounts/account-type";
import { api } from "../../helper/api";

import { AppDispatch } from "../store";
import { dataSlice } from "./dataSlice";

export const AddAccountAsync =
  (account: accountType) => (dispatch: AppDispatch) => {
    api.post(endpoints.account,account).then((response) => {
      dispatch(dataSlice.actions.AddAccount(response.data.data));
    });
  };


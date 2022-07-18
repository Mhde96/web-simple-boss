import { NavigateFunction } from "react-router-dom";
import { boolean } from "yup";
import { endpoints } from "../../constant/endpoints";
import { endroutes } from "../../constant/endroutes";
import { accountType } from "../../containers/accounts/account-type";
import { journalType } from "../../containers/journals/journal-type";
import { api } from "../../helper/api";
import appSlice from "../app/appSlice";

import { AppDispatch } from "../store";
import { dataSlice } from "./dataSlice";

export const SaveAccountAsync =
  (account: accountType, navigate: NavigateFunction) =>
  (dispatch: AppDispatch) => {
    let configration = () => {
      let method = "post";
      let url = endpoints.account;
      account.financial_statement = String(account.financial_statement);
      let data = account;

      if (account.id) {
        method = "put";
        url = url + "/" + account.id;
      }

      return { method, url, data };
    };
    api({ ...configration() }).then((response) => {
      dispatch(fetchAccountsAsync());
      navigate(-1);
    });
  };

export const deleteAccountAsync =
  (account: accountType) => (dispatch: AppDispatch) => {
    api.delete(endpoints.account + "/" + account.id).then(() => {
      dispatch(fetchAccountsAsync());
    });
  };

export const fetchAccountsAsync = () => (dispatch: AppDispatch) => {
  api.get(endpoints.account).then((response) => {
    if (response.data.success) {
      dispatch(dataSlice.actions.fetchAccounts(response.data.data));
    }
  });
};

// ==========================================================================
// JOURNALS
// ==========================================================================

export const fetchJournalsAsync = () => (dispatch: AppDispatch) => {
  api.get(endpoints.journals).then((response) => {
    dispatch(dataSlice.actions.fetchJournals(response.data.data));
  });
};

export const deleteJournalAsync =
  (journal: journalType) => (dispatch: AppDispatch) => {
    api.delete(endpoints.journals + "/" + journal.id).then((response) => {
      dispatch(fetchJournalsAsync());
    });
  };

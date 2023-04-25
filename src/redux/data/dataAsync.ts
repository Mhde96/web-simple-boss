import { NavigateFunction } from "react-router-dom";
import { endpoints } from "../../constant/endpoints";
import { accountType } from "../../containers/accounts/account-type";
import { journalType } from "../../containers/journals/journal-type";
import { api } from "../../helper/api";

import { AppDispatch } from "../store";
import { dataSlice } from "./dataSlice";

export const SaveAccountAsync =
  (account: accountType, navigate: NavigateFunction) =>
  (dispatch: AppDispatch) => {
    let configration = () => {
      let method = "post";
      let url = account.id ? endpoints.update_account : endpoints.add_account;
      account.financial_statement = String(account.financial_statement);
      let data = account;

      return { method, url, data };
    };
    api({ ...configration() }).then((response) => {
      dispatch(fetchAccountsAsync());
      navigate(-1);
    });
  };

export const deleteAccountAsync =
  (account: accountType) => (dispatch: AppDispatch) => {
    api.post(endpoints.delete_account, account).then(() => {
      dispatch(fetchAccountsAsync());
    });
  };

export const fetchAccountsAsync = () => (dispatch: AppDispatch) => {
  api.post(endpoints.fetch_accounts).then((response) => {
    if (response.data.success) {
      dispatch(dataSlice.actions.fetchAccounts(response.data.data));
    }
  });
};

// ==========================================================================
// JOURNALS
// ==========================================================================

export const fetchJournalsAsync = () => (dispatch: AppDispatch) => {
  api.post(endpoints.fetch_journals).then((response) => {
    dispatch(dataSlice.actions.fetchJournals(response.data.data));
  });
};

export const deleteJournalAsync =
  (journal: journalType) => (dispatch: AppDispatch) => {
    api.post(endpoints.delete_journal, journal).then((response) => {
      dispatch(fetchJournalsAsync());
    });
  };

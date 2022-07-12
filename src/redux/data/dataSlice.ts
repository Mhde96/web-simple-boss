import { createSlice } from "@reduxjs/toolkit";
import { accountType } from "../../containers/accounts/account-type";
import { journalType } from "../../containers/journals/journal-type";
import { RootState } from "../store";

const initialState = {
  accounts: [],
  journals: [],
  searchAccount: {
    list: [],
    open: false,
    rowIndex: undefined,
  },
};

export const dataSlice = createSlice({
  name: "dataReducer",
  initialState,
  reducers: {
    fetchAccounts: (state, { payload }) => {
      state.accounts = payload;
    },
    fetchJournals: (state, { payload }) => {
      state.journals = payload;
    },
    // searchAccount: (state, { payload }) => {
    //   const { text, reset, open } = payload;
    //   if (reset == true) {
    //     state.search_account.list = [];
    //     state.searchAccount.open = false;
    //     state.searchAccount.rowIndex = undefined;
    //   } else {
    //     state.searchAccount.open = true;
    //     state.searchAccount.list = state.accounts?.filter((account) =>
    //       account.name.toLowerCase().match(text.toLowerCase())
    //     );
    //   }
    // },
  },
});

export const selectAccounts = (state: RootState): Array<any> =>
  state.dataReducer.accounts;
export const selectJournals = (state: RootState): Array<journalType> =>
  state.dataReducer.journals;

export const SelectSearchAccount = (state: RootState) =>
  state.dataReducer.searchAccount;

export default dataSlice;

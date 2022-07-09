import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [
    {
      id: 1,
      name: "box",
    },
    {
      id: 2,
      name: "bank",
    },
    {
      id: 3,
      name: "goods",
    },
  ],
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
    AddAccount: (state, { payload }) => {
      state.accounts.push({ payload });
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

export const selectAccounts = (state) => state.dataReducer.accounts;
export const SelectSearchAccount = (state) => state.dataReducer.searchAccount;

export default dataSlice;

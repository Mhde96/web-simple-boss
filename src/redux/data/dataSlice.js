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
};

export const dataSlice = createSlice({
  name: "dataReducer",
  initialState,
  reducers: {},
});

export const selectAccounts = (state) => state.dataReducer.accounts;
export default dataSlice;

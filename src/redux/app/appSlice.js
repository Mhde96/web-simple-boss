import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 1,
    name: "Mohamd Almhde",
    email: "m.mhde96@hotmail.com",
  },
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {},
});

export const selectUser = (state) => state.appReducer.user;
export default appSlice;

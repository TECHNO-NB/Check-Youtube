import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {
    login: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;

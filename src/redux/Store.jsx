import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    
  },
  devTools: true
});

export default store;

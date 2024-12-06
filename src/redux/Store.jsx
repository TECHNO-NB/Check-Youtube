import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginSlice";
import  searchSlice  from "./SearchSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    search: searchSlice,
  },
});

export default store;

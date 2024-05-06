import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import LoginCheck from "./LoginCheck";
export const store = configureStore({
  reducer: {
    user: UserSlice,
    login:LoginCheck,
  },
});

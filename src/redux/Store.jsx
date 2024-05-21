import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import LoginCheck from "./LoginCheck";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import localForage from 'localforage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
  key: 'root',
  version: 1,
  storage:localForage,
};

const rootReducer = combineReducers({
  user: UserSlice,
  login: LoginCheck,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

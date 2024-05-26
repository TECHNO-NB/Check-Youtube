import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import LoginCheck from "./LoginCheck";
import { persistReducer, persistStore } from "redux-persist";
import localForage from 'localforage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'; // More efficient merging

const persistConfig = {
  key: 'root',
  version: 1,
  storage: localForage,  // Use localForage for better performance
  whitelist: ['user', 'login'],  // Ensure keys match your reducers
  stateReconciler: autoMergeLevel2,  // Use autoMergeLevel2 for efficient state merging
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
persistor.subscribe(() => {
  console.log('Persisted state:', store.getState());
});

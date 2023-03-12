import { legacy_createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; // defaults to localStorage for web
import { userReducer } from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = legacy_createStore(persistedReducer);

export const persistor = persistStore(store);

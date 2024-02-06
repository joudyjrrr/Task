import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import settings from "./slices/settings";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["lang"],
};

const rootReducer = combineReducers({
  settings,
});

export { rootPersistConfig, rootReducer };

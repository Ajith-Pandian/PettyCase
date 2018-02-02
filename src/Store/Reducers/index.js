import { AsyncStorage } from "react-native";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import Cases from "./CaseReducer";

const casesPersistConfig = {
  key: "Cases",
  storage: AsyncStorage,
  whitelist: ["cases"]
};

const rootReducer = combineReducers({
  Cases: persistReducer(casesPersistConfig, Cases)
});

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["Cases"]
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;

import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import logger from "redux-logger";
import persistedReducer from "./Reducers";

const middlewares = [];
middlewares.push(thunk);

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

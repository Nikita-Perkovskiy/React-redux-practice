import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducers from "../reducers/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

const persistor = persistStore(store);

export { store, persistor };

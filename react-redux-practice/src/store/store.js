import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { countReducer } from "../reducers/index.js";

const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { countReducer } from "../reducers/index.js";

//import { COUNT_INCREASE, COUNT_DECREASE } from "./ActionName";

// let initialState = {
//   count: 0,
// };

// const Increase = (state = initialState, action) => {
//   switch (action.type) {
//     case COUNT_INCREASE:
//       return {
//         ...state,
//         count: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const Decrease = (state = initialState, action) => {
//   switch (action.type) {
//     case COUNT_DECREASE:
//       return {
//         ...state,
//         count: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const reducers = combineReducers({
//   Increase,
//   Decrease,
// });

// const reducers = (state = initialState, action) => {
//   switch (action.type) {
//     case COUNT_INCREASE:
//       return {
//         ...state,
//         count: action.payload,
//       };
//     case COUNT_DECREASE:
//       return {
//         ...state,
//         count: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});

export default store;

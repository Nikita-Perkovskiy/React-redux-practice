import { createAction } from "@reduxjs/toolkit";
import { COUNT_INCREASE, COUNT_DECREASE, SET_CV_DATA } from "./ActionName";

export const countIncrease = createAction(COUNT_INCREASE);
export const countDecrease = createAction(COUNT_DECREASE);
export const setCvData = createAction(SET_CV_DATA);

// export const countIncrease = (count) => {
//   return {
//     payload: count + 1,
//   };
// };

// export const countDecrease = (count) => {
//   return {
//     type: COUNT_DECREASE,
//     payload: count - 1,
//   };
// };

// export const setCvData = (cv) => {
//   return {
//     type: SET_CV_DATA,
//     payload: (cv = payload),
//   };
// };
//createAction(SET_CV_DATA);

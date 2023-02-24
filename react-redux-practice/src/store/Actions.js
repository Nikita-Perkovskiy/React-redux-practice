import { COUNT_INCREASE, COUNT_DECREASE } from "./ActionName";

export const countIncrease = (count) => {
  return {
    type: COUNT_INCREASE,
    payload: count + 1,
  };
};

export const countDecrease = (count) => {
  return {
    type: COUNT_DECREASE,
    payload: count - 1,
  };
};

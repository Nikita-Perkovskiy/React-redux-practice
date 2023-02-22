import { createStore } from "redux";

let initialState = {
  count: 0,
};
export const countIncrease = (count) => {
  return {
    type: "CountIncrease",
    payload: count + 1,
  };
};

export const countDecrease = (count) => {
  return {
    type: "CountDecrease",
    payload: count - 1,
  };
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "CountIncrease":
      return {
        ...state,
        count: action.payload,
      };
    case "CountDecrease":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducers);

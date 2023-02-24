import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const coutSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    actionIncrease: (state) => {
      state.count += 1;
    },
    actionDecrease: (state) => {
      state.count -= 1;
    },
  },
});

export const { actionIncrease, actionDecrease } = coutSlice.actions;

export default coutSlice.reducer;

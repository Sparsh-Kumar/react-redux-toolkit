import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  counter: number;
  info: number;
};

const initialState: CounterState = {
  counter: 0,
  info: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
    decrementCounter: (state) => {
      state.counter -= 1;
    },
    incrementInfo: (state) => {
      state.info += 1;
    },
    decrementInfo: (state) => {
      state.info -= 1;
    }
  },
});

export const { incrementCounter, decrementCounter, incrementInfo, decrementInfo } = counterSlice.actions;
export default counterSlice.reducer;


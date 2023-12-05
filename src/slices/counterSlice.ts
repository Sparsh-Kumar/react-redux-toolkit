import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import counterIncrementThunk from "../thunks/counterIncrementThunk";

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
    incrementCounterByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    decrementCounter: (state) => {
      state.counter -= 1;
    },
    decrementCounterByAmount: (state, action: PayloadAction<number>) => {
      state.counter -= action.payload;
    },
    incrementInfo: (state) => {
      state.info += 1;
    },
    incrementInfoByAmount: (state, action: PayloadAction<number>) => {
      state.info += action.payload;
    },
    decrementInfo: (state) => {
      state.info -= 1;
    },
    decrementInfoByAmount: (state, action: PayloadAction<number>) => {
      state.info -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(counterIncrementThunk.fulfilled, (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    });
  }
});

export const {
  incrementCounter,
  incrementCounterByAmount,
  decrementCounter,
  decrementCounterByAmount,
  incrementInfo,
  incrementInfoByAmount,
  decrementInfo,
  decrementInfoByAmount,
} = counterSlice.actions;
export default counterSlice.reducer;


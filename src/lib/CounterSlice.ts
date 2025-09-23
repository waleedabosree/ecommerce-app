import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

// ✅ Correct actions export
export const { increment, decrement, reset } = counterSlice.actions;

// ✅ Reducer export
export default counterSlice.reducer;

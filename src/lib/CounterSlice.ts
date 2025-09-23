import { count } from 'console';
import { counterSlice } from './../../node_modules/@reduxjs/toolkit/src/listenerMiddleware/tests/listenerMiddleware.withTypes.test-d';

export interface CounterState {
    counter:number;
}

const initialState = { 
    counter:0;
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter ++;
        }
        decrement: (state) => {
            state.counter --;
        }
        reset: (state) => {
            state.counter =0;
        }
    },
});

export const {increment.decrement} counterSlice.actions
export default counterSlice.reducer
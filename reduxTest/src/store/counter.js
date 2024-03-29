import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 5, showCounter: true };

const counterSlice = createSlice({
    name: "counter ",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload

        },
        decrease(state, action) {
            state.counter = state.counter - action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }

    }
});
export const CounterSliceReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;

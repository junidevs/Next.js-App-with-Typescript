import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

export type CounterState = {
    value: number;
};

const initialState: CounterState = {
    value: 0,
};

export const notifySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
             state.value++;
        },
        decrement: state => {
            state.value--;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
    increment,
    decrement,
    incrementByAmount,
} = notifySlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.

// exporting the reducer here, as we need to add this to the store
export default notifySlice.reducer;
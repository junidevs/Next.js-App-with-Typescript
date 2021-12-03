import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store'

export type pathValue = {
    value: string;
};

const initialState: pathValue = {
    value: '',
};

export const pathValue = createSlice({
    name: 'pathValue',
    initialState,
    reducers: {
        updatePath: (state, { payload } : PayloadAction<string>) => {
            state.value = payload;
        },
    },
});

export const {
    updatePath,

} = pathValue.actions;

export const pathValueReader = (state: RootState) => state.pathSlice.value;
export default pathValue.reducer;
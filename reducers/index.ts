import { combineReducers } from '@reduxjs/toolkit';
import pathSlice  from '../slices/pathSlice'

const rootReducer = combineReducers({
     pathSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

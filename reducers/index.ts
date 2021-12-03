import { combineReducers } from '@reduxjs/toolkit';
import notifySlice  from '../slices/notifySlice'
import pathSlice  from '../slices/pathSlice'

const rootReducer = combineReducers({
     notifySlice,
     pathSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

import { configureStore,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit';

import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,


} from 'react-redux';
import reducers from '../reducers';


export const store = configureStore({
    reducer: reducers,
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;
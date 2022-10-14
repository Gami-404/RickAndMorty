import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { CharacterApi } from './../features/characters/characterApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [CharacterApi.reducerPath]: CharacterApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(CharacterApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

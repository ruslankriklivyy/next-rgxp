import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import patternsSlice from './slices/patternsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: { patterns: patternsSlice },
  });
};

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;

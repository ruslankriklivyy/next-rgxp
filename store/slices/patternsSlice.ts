import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListPattern } from '../../interfaces';
import type { RootState, AppThunk } from '../store';

interface InitialState {
  items: IListPattern[];
}

const initialState: InitialState = {
  items: [],
};

export const patternsSlice = createSlice({
  name: 'patterns',
  initialState,
  reducers: {
    setPatternsItems: (state, action: PayloadAction<IListPattern[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setPatternsItems } = patternsSlice.actions;
export default patternsSlice.reducer;

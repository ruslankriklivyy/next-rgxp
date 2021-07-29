import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListPattern } from '../../interfaces';

interface InitialState {
  items: IListPattern[];
  searchQuery: String;
}

const initialState: InitialState = {
  items: [],
  searchQuery: '',
};

export const patternsSlice = createSlice({
  name: 'patterns',
  initialState,
  reducers: {
    setPatternsItems: (state, action: PayloadAction<IListPattern[]>) => {
      state.items = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<String>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setPatternsItems, setSearchQuery } = patternsSlice.actions;
export default patternsSlice.reducer;

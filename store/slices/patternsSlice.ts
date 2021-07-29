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
      if (state.searchQuery !== '') {
        const newItems = action.payload.filter(
          (item) =>
            item.title.en.toLowerCase().indexOf(state.searchQuery.toLowerCase()) >= 0 ||
            item.title.ru.toLowerCase().indexOf(state.searchQuery.toLowerCase()) >= 0,
        );
        state.items = newItems;
      } else {
        state.items = action.payload;
      }
    },
    setSearchQuery: (state, action: PayloadAction<String>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setPatternsItems, setSearchQuery } = patternsSlice.actions;
export default patternsSlice.reducer;

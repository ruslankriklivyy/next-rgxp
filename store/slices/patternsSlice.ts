import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListPattern } from '../../interfaces';

interface InitialState {
  items: IListPattern[];
  searchQuery: string;
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
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setPatternsItemsByType: (state, action: PayloadAction<string>) => {
      const newItems = state.items.filter((item) => item.tags.includes(action.payload));
      state.items = newItems;
    },
  },
});

export const { setPatternsItems, setSearchQuery, setPatternsItemsByType } = patternsSlice.actions;
export default patternsSlice.reducer;

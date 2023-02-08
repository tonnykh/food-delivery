import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchInput: '',
  },
  reducers: {
    handleSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { handleSearchInput } = searchSlice.actions;

export default searchSlice.reducer;

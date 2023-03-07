import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import searchSlice from './searchSlice';
import locationSlice from './locationSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    search: searchSlice,
    location: locationSlice,
  },
});

export default store;

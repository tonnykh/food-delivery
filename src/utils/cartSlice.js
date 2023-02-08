import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalCost: 0,
    restaurant: [],
  },
  reducers: {
    addItem: (state, action) => {
      let itemFound = false;
      state.items.forEach((itemWithQuantity) => {
        if (itemWithQuantity.item.id === action.payload.id) {
          itemFound = true;
          itemWithQuantity.quantity += 1;
        }
      });
      if (!itemFound) {
        state.items.push({ item: action.payload, quantity: 1 });
      }
      state.totalCost += action.payload.price;
    },

    removeItem: (state, action) => {
      state.items.forEach((itemWithQuantity, index) => {
        if (itemWithQuantity.item.id === action.payload.id) {
          itemWithQuantity.quantity === 1
            ? state.items.splice(index, 1)
            : (itemWithQuantity.quantity -= 1);
          state.totalCost -= action.payload.price / 100;
        }
      });
    },

    addRestaurant: (state, action) => {
      state.restaurant.length === 0 && state.restaurant.push(action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart, addRestaurant } =
  cartSlice.actions;

export default cartSlice.reducer;

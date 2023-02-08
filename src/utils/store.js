import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        search: searchSlice,
    },
});

export default store;
import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer:{
        cart: cartSlice
    }
});

export default appStore;
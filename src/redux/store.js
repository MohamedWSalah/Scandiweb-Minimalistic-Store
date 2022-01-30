import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";

import counterReducer from "./counterSlice";
import categoriesReducer from "./categoriesSlice";
import currenciesReducer from "./currencySlice";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoriesReducer,
    currencies: currenciesReducer,
    products: productsReducer,
    cart: cartReducer,
    loadingBar: loadingBarReducer,
  },
});

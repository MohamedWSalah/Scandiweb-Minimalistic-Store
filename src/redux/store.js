import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";

import counterReducer from "./counterSlice";
import categoriesReducer from "./categoriesSlice";
import currenciesReducer from "./currencySlice";
import productsReducer from "./productSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoriesReducer,
    currencies: currenciesReducer,
    products: productsReducer,
    loadingBar: loadingBarReducer,
  },
});

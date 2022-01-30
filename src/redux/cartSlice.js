import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartArr: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartArr.push(action.payload);
      state.totalQuantity++;
    },

    increaseQuantityOfItem: (state, action) => {
      const id = action.payload;

      for (const obj of state.cartArr) {
        if (obj.id === id) {
          obj.quantity++;
          state.totalQuantity++;
          break;
        }
      }
      console.log(current(state.cartArr));
    },

    decreaseQuantityOfItem: (state, action) => {
      const id = action.payload;

      for (const obj of state.cartArr) {
        if (obj.id === id) {
          obj.quantity--;
          state.totalQuantity--;
          break;
        }
      }
      console.log(current(state.cartArr));
    },
  },
});

export const { addToCart, increaseQuantityOfItem, decreaseQuantityOfItem } =
  cartSlice.actions;

export default cartSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: {},
};

export const fetchProductsWithCategoryName = createAsyncThunk(
  "products/fetchProducts",
  async (catName) => {
    const response = await axios.post("http://localhost:4000/", {
      query: `
        query category {
          category(input: { title: "${catName}" }) {
            name
            products {
              id
              name
              inStock
              gallery
              description
              category
              prices {
                currency {
                  label
                  symbol
                }
                amount
              }
              brand
              attributes {
                id
                name
                type
                items {
                  displayValue
                  value
                  id
                }
              }
            }
          }
        }
      `,
    });
    return response.data.data.category;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: {
    [fetchProductsWithCategoryName.fulfilled]: (state, action) => {
      state.products = {};
      state.products = action.payload;
    },
  },
});

export default productsSlice.reducer;

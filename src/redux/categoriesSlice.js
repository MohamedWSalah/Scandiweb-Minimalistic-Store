import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categoriesArr: [],
  activeCategory: "",
};

export const fetchCategoriesNames = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.post("http://localhost:4000/", {
      query: `
        query categories {
          categories {
            name
          }
        }
      `,
    });
    return response.data.data.categories;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },

  extraReducers: {
    [fetchCategoriesNames.fulfilled]: (state, action) => {
      // state.categoriesArr = action.payload;
      state.categoriesArr = [];
      const res = action.payload;
      res.forEach((element) => {
        state.categoriesArr.push(element.name);
      });
    },
  },
});

export const { updateActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

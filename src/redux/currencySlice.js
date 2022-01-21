import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currencyArr: [],
  activeCurrency: "",
};

export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchCurrencies",
  async () => {
    const response = await axios.post("http://localhost:4000/", {
      query: `query currencies{
                currencies{
                  label
                  symbol
                }
              }`,
    });
    return response.data.data.currencies;
  }
);

export const currencySlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    updateActiveCurrency: (state, action) => {
      state.activeCurrency = {};
      state.activeCurrency = action.payload;
    },
  },

  extraReducers: {
    [fetchCurrencies.fulfilled]: (state, action) => {
      state.currencyArr = [];
      const res = action.payload;

      res.forEach((element) => {
        state.currencyArr.push(element);
      });
    },
  },
});
export const { updateActiveCurrency } = currencySlice.actions;

export default currencySlice.reducer;

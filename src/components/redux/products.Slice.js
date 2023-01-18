import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./products.Operation";

const fetchProductsPendingReducer = (state) => {
  state.isLoading = true;
};

const fetchProductsSuccessReducer = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

const fetchProductsRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isLoading: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, fetchProductsPendingReducer)
      .addCase(fetchProducts.fulfilled, fetchProductsSuccessReducer)
      .addCase(fetchProducts.rejected, fetchProductsRejectedReducer),
});

export const productsReducer = productsSlice.reducer;

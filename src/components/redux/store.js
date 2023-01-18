import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products.Slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  }
});

export default store;
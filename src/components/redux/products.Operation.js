import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from "axios";

const BASE_URL = 'https://api.thedogapi.com/v1/';

axios.defaults.baseURL = BASE_URL;

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
        const response = await axios('/breeds?limit=8&page=1');
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (page, thunkAPI) => {
    const queryInstance = axios.create({
      baseURL: 'https://64ee06641f8721827142313f.mockapi.io/api/phonebook/',
      params: {
        page,
        limit: 12,
      },
    });

try {
    const response = await queryInstance.get('/advert');
    console.log(response.data)
    return response.data;
  } catch (e) {
    console.log('Something went wrong try again');
    return thunkAPI.rejectWithValue(e.message);
  }
}
);

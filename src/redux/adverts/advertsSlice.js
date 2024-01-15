import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsOperations';

const advertsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.rejected, handleRejected)
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      });
  },
});

export const getAdverts = state => state.adverts.items;
export const advertsReducer = advertsSlice.reducer;


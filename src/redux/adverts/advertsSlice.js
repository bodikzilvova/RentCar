import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsOperations';

const advertsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  hasMore: true,
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
        state.items =  [...state.items, ...payload];
        // state.page += 1;
        state.hasMore = payload.length > 0;
      });
  },
});

export const getAdverts = state => state.adverts.items;
export const getPage = (state) => state.adverts.page;
export const advertsReducer = advertsSlice.reducer;


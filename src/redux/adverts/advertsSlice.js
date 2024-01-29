import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsOperations';

const advertsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  hasMore: true,
  favorites: [],
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
        state.items = [...state.items, ...payload];
        state.hasMore = payload.length > 0;
      });
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        ad => ad.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = advertsSlice.actions;

export const getAdverts = state => state.adverts.items;
export const getHasMore = state => state.adverts.hasMore;
export const getFavorites = state => state.adverts.favorites;

export const advertsReducer = advertsSlice.reducer;

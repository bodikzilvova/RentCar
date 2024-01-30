import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsOperations';

const advertsInitialState = {
  items: [],
  filteredAdverts: [],
  brandFilter: '',
  isLoading: false,
  error: null,
  hasMore: true,
  favorites: [],
  currentPage: 1,
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
      .addCase(fetchAdverts.fulfilled, (state, { payload, meta }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...payload];
        state.hasMore = payload.length > 0;
        state.currentPage = meta.arg.page;
      });
  },
  reducers: {
    setAdverts: (state, action) => {
      state.items = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        ad => ad.id !== action.payload.id
      );
    },
    setBrandFilter: (state, action) => {
      state.brandFilter = action.payload;

      state.filteredAdverts = state.items.filter(
        advert => advert.make === action.payload
      );
    },
  },
});

export const { setAdverts } = advertsSlice.actions;

export const { addToFavorites, removeFromFavorites } = advertsSlice.actions;

export const getFilteredAdverts = state => {
  const brandFilter = state.adverts.brandFilter;
  const allAdverts = state.adverts.items;

  return brandFilter
    ? allAdverts.filter(advert => advert.make === brandFilter)
    : allAdverts;
};

export const getAdverts = state => state.adverts.items;
export const getHasMore = state => state.adverts.hasMore;
export const getFavorites = state => state.adverts.favorites;

export const getCurrentPage = state => state.adverts.currentPage;

export const { setBrandFilter } = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;

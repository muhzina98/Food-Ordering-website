
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDishes = createAsyncThunk('dishes/fetchDishes', async () => {
  const res = await axios.get('https://dummyjson.com/c/d16a-0437-4bf9-80ac'); 
  return res.data;
});

const dishSlice = createSlice({
  name: 'dishes',
  initialState: {
    allDishes: [],
    filteredDishes: [],
    loading: false,
    error: null,
    filters: {
      category: 'All',
      priceRange: [0, 1000],
      minRating: 0,
      searchQuery: '',
    },
  },
  reducers: {
    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.filters.priceRange = action.payload;
    },
    setMinRating: (state, action) => {
      state.filters.minRating = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.filters.searchQuery = action.payload;
    },
    applyFilters: (state) => {
      const { category, priceRange, minRating, searchQuery } = state.filters;
      state.filteredDishes = state.allDishes.filter((dish) => {
        return (
          (category === 'All' || dish.category === category) &&
          dish.price >= priceRange[0] &&
          dish.price <= priceRange[1] &&
          dish.rating >= minRating &&
          dish.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.loading = false;
        state.allDishes = action.payload;
        state.filteredDishes = action.payload;
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setCategory,
  setPriceRange,
  setMinRating,
  setSearchQuery,
  applyFilters,
} = dishSlice.actions;

export default dishSlice.reducer;

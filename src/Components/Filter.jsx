import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCategory,
  setPriceRange,
  setMinRating,
  setSearchQuery,
  applyFilters,
} from '../redux/slices/dishSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const { allDishes, filters } = useSelector((state) => state.dishes);

  const categories = ['All', ...new Set(allDishes.map((dish) => dish.category))];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-between">
      
      <input
        type="text"
        placeholder="Search..."
        value={filters.searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="border px-4 py-2 rounded"
      />

      <select
        value={filters.category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        className="border px-4 py-2 rounded"
      >
        {categories.map((cat, i) => (
          <option key={i} value={cat}>{cat}</option>
        ))}
      </select>

    
      <select
        onChange={(e) => {
          const [min, max] = e.target.value.split('-').map(Number);
          dispatch(setPriceRange([min, max]));
        }}
        className="border px-4 py-2 rounded"
      >
        <option value="0-1000">All Prices</option>
        <option value="0-100">Under ₹100</option>
        <option value="100-300">₹100 - ₹300</option>
        <option value="300-500">₹300 - ₹500</option>
        <option value="500-1000">Above ₹500</option>
      </select>

     
      <select
        onChange={(e) => dispatch(setMinRating(Number(e.target.value)))}
        className="border px-4 py-2 rounded"
      >
        <option value="0">All Ratings</option>
        <option value="3">3★ and above</option>
        <option value="4">4★ and above</option>
        <option value="4.5">4.5★ and above</option>
      </select>

      <button
        onClick={() => dispatch(applyFilters())}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Apply
      </button>
    </div>
  );
};

export default Filter;

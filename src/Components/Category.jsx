import React from 'react';

const Category= ({ categories, selected, onChange }) => {
  return (
    <div className="my-4 text-center">
      <label className="mr-2 font-semibold text-lg">Filter by Category:</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="border border-blue-400 rounded px-3 py-1 text-blue-800"
      >
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;

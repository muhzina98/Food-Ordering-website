import React from 'react';

function ProductCard({ image, name, description, price, rating, shop ,onAddToCart}) {
  return (
    <div className="border border-gray-200 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />

      <h2 className="text-lg font-semibold mt-3">{name}</h2>
      <p className="text-sm text-gray-600 mb-1">{shop}</p>

      <p className="text-gray-700 text-sm mb-3">{description}</p>

      <div className="flex justify-between items-center mb-4">
        <span className="text-green-600 font-bold">₹{price}/-</span>
        <span className="text-yellow-500 font-semibold">⭐ {rating}</span>
      </div>

      <button className="w-full border border-cyan-400 text-cyan-600 px-4 py-2 rounded hover:bg-cyan-100 transition "
      onClick={onAddToCart}>
        {/* {/* // (e) => e.preventDefault()? */}
        Add to Cart 
      </button>
    </div>
  );
}

export default ProductCard;

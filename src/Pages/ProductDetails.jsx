import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDishes } from '../api/dish';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchDishes();
      const selected = data.find((item) => item.id === parseInt(id));
      setProduct(selected);
    };
    getProduct();
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex justify-center items-start p-6">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-md p-6 space-y-4 border border-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded-xl shadow-sm"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        </div>
        <div className="text-sm text-gray-500">Shop: {product.shop}</div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="text-green-600 font-bold text-lg">₹{product.price}/-</span>
          <span className="text-yellow-500 text-sm font-medium">⭐ {product.rating}</span>
        </div>

        <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes, applyFilters } from '../redux/slices/dishSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import FilterPanel from '../Components/Filter';

function DishesPage() {
  const dispatch = useDispatch();
  const { filteredDishes, loading, error } = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(fetchDishes()).then(() => dispatch(applyFilters()));
  }, [dispatch]);

  return (
    <div className="p-6">
      <FilterPanel />

      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && filteredDishes.length === 0 && (
        <p className="text-center text-gray-500">No dishes found.</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredDishes.map((dish) => {
          const handleAddToCart = (e) => {
            e.preventDefault();
            dispatch(addToCart({
              id: dish.id,
              name: dish.name,
              price: dish.price,
              image: dish.image,
            }));
          };

          return (
            <Link key={dish.id} to={`/productDetails/${dish.id}`}>
              <ProductCard
                image={dish.image}
                name={dish.name}
                shop={dish.shop}
                description={dish.description}
                price={dish.price}
                rating={dish.rating}
                onAddToCart={handleAddToCart}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DishesPage;

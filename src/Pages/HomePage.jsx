import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/c/5310-76a2-4aa9-b885')
      .then((response) => {
        const mappedItems = response.data.map((dish) => ({
          name: dish.name,
          price: dish.price,
          image: dish.image,
        }));
        setFeaturedItems(mappedItems);
      })
      .catch((error) => {
        console.error('Error fetching featured items:', error);
      });
  }, []);

  const featureddish = featuredItems.slice(0,6);

  return (
    <div className="bg-lightBg dark:bg-darkBg text-gray-800 dark:text-white font-sans">
      
      <div
  className="relative bg-cover bg-center bg-no-repeat h-[30rem] flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://aplantifulpath.com/wp-content/uploads/2019/08/Strawberry-Ice-Cream-1.jpg')",
  }}
>
  <div className=" bg-opacity-50 p-6 rounded-md text-center">
    <h1 className="text-5xl font-bold text-white mb-4">Are you hungry?</h1>
    <p className="text-lg text-white mb-6">
      Don't wait! Let’s start to order food now!
    </p>
    <Link
      to="/menu"
      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 inline-block"
    >
      View Menu
    </Link>
  </div>
</div>



      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="flex flex-wrap justify-center gap-8">
          {featuredItems.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-300">
              Loading dishes...
            </p>
          ) : (
            featureddish.map((dish) => (
              <div
                key={dish.name}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-4 w-72 text-center"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-green-600 dark:text-green-400 text-lg font-bold">
                  ₹{dish.price}
                </p>
                <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

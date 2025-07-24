import React, { useState, useEffect } from 'react'
import { fetchDishes } from '../api/dish';

function HomePage() {

    const [dishes, setDishes] = useState([]);
    useEffect(() => {
        const getDishes = async () => {
            const data = await fetchDishes();
            setDishes(data)
        }
        getDishes();
    }, [])

    return (
        <div className='border p-6'>
            <h1 className='text-2xl font-bold mb-4'> Dishes</h1>
            <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                {dishes.map((dish) => (
                    <div key={dish.id} className='border shadow-lg rounded-xl  overflow-hidden hover:shadow-2xl transition'>
                        <img src={dish.image} alt={dish.name} className=' w-full h-40 object-cover' />
                        <h2 className='text-lg font-semibold mt-2'>{dish.name}</h2>
                        <p className='text-sm text-gray-950'>{dish.shop}</p>

                        <p className='text-gray-900 text-start'>{dish.description}</p>


                        <div className="flex justify-around items-center">
                            <span className="text-green-600 font-bold">₹{dish.price}/-</span>
                            <span className="text-yellow-500 font-semibold">⭐ {dish.rating}</span>
                        </div>
                        <button className='border-t-cyan-400'>Add to cart</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default HomePage
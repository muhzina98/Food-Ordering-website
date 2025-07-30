
import React, { useEffect, useState } from 'react';
import { fetchDishes } from '../api/dish';

const ManageDishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchDishes();
      setDishes(data);
    };
    load();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-700">
              <th className="px-6 py-3 border-b border-gray-300">ID</th>
              <th className="px-6 py-3 border-b border-gray-300">TITLE</th>
              <th className="px-6 py-3 border-b border-gray-300">PRICE</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((d) => (
              <tr key={d.id} className="hover:bg-gray-100">
                <td className="px-6 py-2 border-b">{d.id}</td>
                <td className="px-6 py-2 border-b">{d.name}</td>
                <td className="px-6 py-2 border-b">{d.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDishes;

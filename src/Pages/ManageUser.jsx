import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/user'; 

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-700">
              <th className="px-6 py-3 border-b border-gray-300">ID</th>
              <th className="px-6 py-3 border-b border-gray-300">Name</th>
              <th className="px-6 py-3 border-b border-gray-300">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-6 py-2 border-b">{user.id}</td>
                <td className="px-6 py-2 border-b">{user.name}</td>
                <td className="px-6 py-2 border-b">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;


import React from 'react';
import Sidebar from '../Components/Sidebar';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const { name } = useSelector((state) => state.user);

  return (
    <div className="flex bg-gray-100 min-h-screen">
     
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome, {name || 'User'}! 🎉
        </h1>
        <p className="text-gray-600">We’re glad to have you back.</p>
      </main>
    </div>
  );
};

export default UserDashboard;

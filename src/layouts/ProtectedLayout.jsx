// src/layout/ProtectedLayout.jsx
import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;

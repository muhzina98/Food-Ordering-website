// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { name, email } = useSelector((state) => state.user);

  return (
    <aside className="w-64 bg-white shadow-lg p-6 min-h-screen">
      <div className="text-center mb-6">
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="mt-4 text-lg font-semibold">{name || 'User'}</h2>
        <p className="text-sm text-gray-500">{email}</p>
      </div>

      <nav className="space-y-2">
        <Link to="/user-dashboard/cart" className="block px-4 py-2 rounded-md hover:bg-gray-200 text-gray-700">
          🛒 Cart
        </Link>
        <Link to="/user-dashboard/order" className="block px-4 py-2 rounded-md hover:bg-gray-200 text-gray-700">
          📦 Orders
        </Link>
        <Link to="/wishlist" className="block px-4 py-2 rounded-md hover:bg-gray-200 text-gray-700">
          ❤️ Wishlist
        </Link>
        <Link to="/coupons" className="block px-4 py-2 rounded-md hover:bg-gray-200 text-gray-700">
          🎟️ Coupons
        </Link>
        <Link to="/help" className="block px-4 py-2 rounded-md hover:bg-gray-200 text-gray-700">
          ❓ Help
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;

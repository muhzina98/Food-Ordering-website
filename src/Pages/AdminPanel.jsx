import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';


function AdminPanel() {
 
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem('admin');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
   
      <aside className="w-64 bg-white dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Admin Panel</h2>
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>

        <nav>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/admin-dashboard/dishes"
                className={({ isActive }) =>
                  isActive
                    ? 'block px-3 py-2 rounded bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white'
                    : 'block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }
              >
                Manage Products
              </NavLink>
            </li>
            <li>
               
            </li>
            <li>
              <NavLink
                to="/admin-dashboard/users"
                className={({ isActive }) =>
                  isActive
                    ? 'block px-3 py-2 rounded bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white'
                    : 'block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }
              >
                Manage Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      
      <main className="flex-1 p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Outlet />
      </main>
    </div>
  );
};


export default AdminPanel
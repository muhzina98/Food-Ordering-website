import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import ThemeToggle from './ThemeToggle';


function Header() {
  const [sideMenu, setSideMenu] = useState(false);
  const toggleMenu = () => setSideMenu(!sideMenu);

  const { isLoggedIn, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const isAdmin = role === 'admin';
  const isUser = role === 'user';
  const isAuthenticated = isLoggedIn && (isAdmin || isUser);


  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate('/login');
  };



  return (
    <header className="w-full bg-white shadow-md px-4 py-2 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="md:hidden">
            {sideMenu ? <X className="w-6 h-6 text-blue-800" /> : <Menu className="w-6 h-6 text-blue-800" />}
          </button>
          {/* Logo + Tagline */}
          <div>
            <Link to="/" className="text-2xl font-bold text-blue-600">YumGo</Link>
            <div className="text-xs text-gray-500 -mt-1">Delicious food delivered fast</div>
          </div>
        </div>
        <ThemeToggle />





        {/* Desktop Navigation */}
        <nav className=" hidden md:flex items-center space-x-12 text-xl font-medium text-blue-800">
          <Link to="/" className="hover:text-blue-900 transition">Home</Link>
          <Link to="/menu" className="hover:text-blue-900 transition">Menu</Link>
          <Link to="/about" className="hover:text-blue-900 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-900 transition">Contact</Link>



          {isAdmin && (
            <Link to="/admin/dashboard" className="hover:text-blue-900 transition">Dashboard</Link>
          )}




          {isAuthenticated ? (
            <button onClick={handleLogout} className="hover:text-red-600 transition">Logout</button>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-900 transition">Login</Link>
              <Link to="/signup" className="hover:text-blue-900 transition">Signup</Link>
            </>
          )}
        </nav>


      </div>



      {sideMenu && (
        <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 z-40">
          <nav className="flex flex-col items-start px-4 text-blue-800 font-medium text-base">
            <Link to="/" onClick={toggleMenu} className="py-2 hover:text-blue-900">Home</Link>
            <Link to="/menu" onClick={toggleMenu} className="py-2 hover:text-blue-900">Menu</Link>
            <Link to="/contact" onClick={toggleMenu} className="py-2 hover:text-blue-900">Contact</Link>

            {isAdmin && (
              <Link to="/admin/dashboard" onClick={toggleMenu} className="py-2 hover:text-blue-900">Dashboard</Link>
            )}



            {isAuthenticated ? (
              <button onClick={handleLogout} className="py-2 hover:text-red-600">Logout</button>
            ) : (
              <>
                <Link to="/login" onClick={toggleMenu} className="py-2 hover:text-blue-900">Login</Link>
                <Link to="/signup" onClick={toggleMenu} className="py-2 hover:text-blue-900">Signup</Link>?
              </>
            )}
          </nav>
        </div>
      )}

    </header>
  );
}

export default Header;

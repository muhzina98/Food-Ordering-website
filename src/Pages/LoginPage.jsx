import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../api/user';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
   const dispatch = useDispatch();
   const navigate = useNavigate();


  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }else if (!passwordRegex.test(password)) {
      newErrors.password = 'Password is invalid';
    }
    else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const handleLogin = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    const apiUsers = await fetchUsers();

    // Add hardcoded admin to list
    const allUsers = [
      ...apiUsers,
      { email: 'admin@gmail.com', password: 'Admin@321', role: 'admin' }
    ];

    const foundUser = allUsers.find(
      (user) => user.email === email && user.password === password
    );
    // console.log("Logged in user:", foundUser);


    if (foundUser) {
      localStorage.setItem('userEmail', foundUser.email);
      localStorage.setItem('userRole', foundUser.role || 'user');

      dispatch(loginSuccess({
        
         name: foundUser.name, 
        email: foundUser.email,
        role: foundUser.role || 'user',
      }));

      alert('Login successful');

      if (foundUser.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } else {
      alert('Invalid email or password');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Something went wrong. Please try again later.');
  }
};

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
      "url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg')",
  }}
  />


      <div className="absolute inset-0 bg-black bg-opacity-40" />

     
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">Login to YumGo</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className={`w-full px-3 py-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-green-400`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className={`w-full px-3 py-2 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-green-400`}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-blue-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;

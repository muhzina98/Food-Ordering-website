import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        address: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!signUpData.name.trim()) newErrors.name = 'Name is required';
        if (!signUpData.email || !emailRegex.test(signUpData.email))
            newErrors.email = 'Valid email is required';
        if (!signUpData.phone || !phoneRegex.test(signUpData.phone))
            newErrors.phone = 'Valid 10-digit phone number required';
        if (!signUpData.password || signUpData.password.length < 6)
            newErrors.password = 'Password must be at least 6 characters';
        if (!signUpData.address.trim()) newErrors.address = 'Address is required';


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            
            console.log('User signed up:', signUpData);
            setSuccessMessage('Signup successful!');
            setSignUpData({ name: '', email: '', phone: '', password: '' });
        }
    };

    return (
        <div className="relative min-h-screen w-full">

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://png.pngtree.com/background/20250203/original/pngtree-food-delivery-fast-food-unhealthy-obesity-concept-picture-image_15460277.jpg')",
                }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />


            <div className=" relative  min-h-screen  flex  justify-center items-center p-3">
                <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-5 space-y-3">
                    <h2 className="text-2xl font-bold text-center text-orange-600">Create Account</h2>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                            <label className="block font-medium">Name</label>
                            <input type="text" name="name" value={signUpData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded" />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block font-medium">Email</label>
                            <input type="email" name="email" value={signUpData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded" />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block font-medium">Phone</label>
                            <input type="tel" name="phone" value={signUpData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border rounded" />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        <div>
                            <label className="block font-medium">Address</label>
                            <textarea name="address" value={signUpData.address}
                                onChange={handleChange}
                                className="w-full p-2 border rounded" />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                        </div>


                        <div>
                            <label className="block font-medium">Password</label>
                            <input type="password" name="password" value={signUpData.password}
                                onChange={handleChange}
                                className="w-full p-2 border rounded" />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
                        >
                            Sign Up
                        </button>

                        {successMessage && <p className="text-green-600 text-sm text-center">{successMessage}</p>}
                    </form>

                    <p className="text-sm text-center p">
                        Already have an account?{' '}
                        <Link to="/login" className="text-orange-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;

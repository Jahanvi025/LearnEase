import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/slice/authSlice";

const Signin = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(signIn(userData));
    };

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/');
        }
    }, [auth.isAuthenticated, navigate]);

    return (
        <div className="relative w-full h-[89vh] p-8">
            <div className="absolute top-0 left-0 w-52 h-52 backgroundgrad borderradius" />
            <div className="absolute bottom-0 right-[47%] z-0 w-32 h-32 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full" />
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
                    <h1 className="text-4xl font-bold leading-tight text-gray-800 flex items-center justify-center">
                        Welcome Back 
                        <span className="text-orange-500 mx-1">to</span> 
                        your 
                        <span className="text-orange-500 mx-1">Account</span> 
                        <span className="text-gray-800 mx-1 pb-1">:</span> 
                        <span className="text-gray-800">)</span>
                    </h1>
                    <p className="mt-4 pr-8 text-font text-gray-600">
                        Sign in to access your personalized dashboard, stay updated with your favorite content, and manage your preferences.
                    </p>
                </div>
                <div className="flex z-10 h-[80vh] items-center justify-center w-full mt-8 lg:w-1/2 lg:mt-0">
                    <div className="w-full p-8 bg-white rounded-lg shadow-lg">
                        <h2 className="text-3xl text-gray-800">Sign In</h2>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-600">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={userData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400 placeholder:text-sm"
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-2 relative">
                                <label htmlFor="password" className="text-sm font-medium text-gray-600">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400 placeholder:text-sm"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    className="absolute right-2 bottom-0 transform -translate-y-1/2 text-sm text-orange-400 hover:text-orange-600"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 disabled:bg-orange-300"
                                disabled={auth.loading}
                            >
                                {auth.loading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </form>
                        {auth.error && <p className="text-red-500 mt-4 text-center">{auth.error.message}</p>}
                        {auth.isAuthenticated && <p className="text-green-500 mt-4 text-center">Logged in successfully</p>}
                        <p className="text-center mt-6 text-gray-600">
                            Don't have an account? <Link to="/signup" className="text-orange-400 hover:text-orange-500">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;

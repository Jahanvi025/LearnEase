import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/slice/authSlice";

const SignUp = () => {
    const [userData, setUserData] = useState({
        userName: '',
        email: '',
        password: '',
        role: 'Student',
    });
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/');
        }
    }, [auth.isAuthenticated, navigate]);

    const [errors, setErrors] = useState([]);
    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = [];

        if (!userData.userName.trim()) {
            newErrors.push('Name is required');
        }

        if (!userData.email.trim()) {
            newErrors.push('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            newErrors.push('Email is invalid');
        }

        if (!userData.password) {
            newErrors.push('Password is required');
        } else if (userData.password.length < 8) {
            newErrors.push('Password must be at least 8 characters long');
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
        } else {
            await dispatch(signUp(userData));
            if(auth.getReady){
                navigate('/verify-otp', {
                    state: {
                        email: userData.email
                    }
                });
            }
            setErrors([]);
        }
    };

    return (
        <div className="relative w-full h-[89vh] p-8">
            <div className="absolute top-0 left-0 w-52 h-52 backgroundgrad borderradius" />
            <div className="absolute bottom-0 right-[47%] z-0 w-32 h-32 backgroundgrad rounded-full" />
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
                    <h1 className="text-4xl font-bold leading-tight text-gray-800">
                        Start Your<span className="text-orange-500"> Day</span> with a {" "}
                        <span className="text-orange-500">Boost</span>
                    </h1>
                    <p className="mt-4 pr-8 text-font text-gray-600">
                        Kickstart your mornings with a blend of knowledge, inspiration, and rhythm. Get daily updates on news, intriguing facts, and the perfect soundtrack to fuel your productivity.
                    </p>
                </div>
                <div className="flex z-10 h-[80vh] items-center justify-center w-full mt-8 lg:w-1/2 lg:mt-0">
                    <div className="w-full p-8 mr-5 bg-white rounded-lg shadow-lg">
                        <h2 className="text-3xl text-gray-800">Create an Account </h2>
                        {auth.error && <p className="text-red-500 mt-4 text-center">{auth.error.message}</p>}
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-600">
                                    Full Name
                                </label>
                                <input
                                    id="userName"
                                    type="text"
                                    placeholder="John Doe"
                                    value={userData.userName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-blue-50 placeholder:text-sm"
                                    required
                                />
                            </div>
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
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-blue-50 placeholder:text-sm"
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="password" className="text-sm font-medium text-gray-600">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-blue-50 placeholder:text-sm"
                                    required
                                />
                            </div>
                           
                            {errors.length > 0 && (
                                <div className="p-3 bg-red-100 border border-red-400 rounded-md">
                                    <ul className="list-disc list-inside text-sm text-red-700">
                                        {errors.map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="flex items-center space-x-2">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 placeholder:text-sm"
                                    required
                                />
                                <label htmlFor="terms" className="text-sm text-font pt-2 pb-2 text-gray-600">
                                    Creating an account means you agree to our Terms of Service and Privacy Policy
                                </label>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed "
                                    disabled={auth.loading}
                                >
                                    {auth.loading ? 'Signing Up...' : 'Sign Up'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

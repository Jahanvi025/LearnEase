import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../../redux/slice/authSlice";

const SignUp = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
    });
    const navigate = useNavigate();
    const auth = useSelector(( state ) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/')
        }
    }, [auth.isAuthenticated, navigate]);

    const [errors, setErrors] = useState([])
    const handleChange = ( e ) => {
        setUserData(( prev ) => ({...prev, [e.target.id]: e.target.value}));
    }

    const handleSubmit = async ( e ) => {
        e.preventDefault()
        const newErrors = []

        if (!userData.name.trim()) {
            newErrors.push('Name is required')
        }

        if (!userData.email.trim()) {
            newErrors.push('Email is required')
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            newErrors.push('Email is invalid')
        }

        if (!userData.password) {
            newErrors.push('Password is required')
        } else if (userData.password.length < 8) {
            newErrors.push('Password must be at least 8 characters long')
        }


        if (newErrors.length > 0) {
            setErrors(newErrors)
        } else {
            await dispatch(signUp(userData))
            navigate('/verify-otp', {
                state: {
                    email: userData.email
                }
            })
            setErrors([])
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md">
                <h2 className="text-3xl font-bold text-center text-gray-900">Welcome to LearnHub</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={userData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={userData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={userData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Role
                        </label>
                        <select
                            id="role"
                            value={userData.role}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Select your role</option>
                            <option value="student">Student</option>
                            <option value="instructor">Instructor</option>
                        </select>
                    </div>
                    {errors.length > 0 && (
                        <div className="p-3 bg-red-100 border border-red-400 rounded-md">
                            <ul className="list-disc list-inside text-sm text-red-700">
                                {errors.map(( error, index ) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={auth.loading}
                    >
                        {auth.loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp

import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import loginimg from "../../Assets/images/login.jpg";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/slice/authSlice";

const Signin = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(signIn(userData));
    }

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/')
        }
    }, [auth.isAuthenticated, navigate]);

    return (
        <div className='flex flex-row justify-between p-8'>
            <img src={loginimg} className='w-[40%] h-[40%]' alt="Login" />
            <div className="flex flex-col items-center justify-center w-[60%] h-[76vh] p-8">
                <div className="w-full max-w-md">
                    <h1 className='text-3xl text-center mb-5'>
                        Welcome Back : <span style={{ fontSize: '24px' }}>)</span>
                    </h1>
                    <div className="flex items-center mb-5">
                        <hr className="flex-grow border-t border-neutral-400" />
                        <p className="mx-4 text-neutral-400 text-font text-[14px]">Login with Email</p>
                        <hr className="flex-grow border-t border-neutral-400" />
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                            className="w-full mb-4 p-2 border border-gray-300 rounded text-font"
                        />
                        <div className='w-full mb-4 relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Password"
                                value={userData.password}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded text-font"
                            />
                            <button
                                type='button'
                                onClick={togglePassword}
                                className='absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-blue-500 hover:text-blue-600'
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
                            disabled={auth.loading}
                        >
                            {auth.loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    {auth.error && <p className="text-red-500 mt-4 text-center">{auth.error.message}</p>}
                    {auth.isAuthenticated && <p className="text-green-500 mt-4 text-center">Logged in successfully</p>}
                </div>
            </div>
        </div>
    );
}

export default Signin;
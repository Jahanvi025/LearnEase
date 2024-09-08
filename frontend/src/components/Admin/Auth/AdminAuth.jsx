import React, {useState} from 'react';
import {AlertCircle, Lock,  EyeOff , Eye } from "lucide-react";
import logo from '../../../Assets/images/infinity (1).png'

//Redux
import {useDispatch, useSelector} from "react-redux";
import {adminSignIn} from "../../../redux/slice/admin/adminAuthSlice";
const AdminAuth = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.adminAuth);
    const [showPassword, setShowPassword] = useState(false)
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(adminSignIn(userData));
    }
    if(auth.isAdminAuthenticated){
        window.location.href = '/admin/dashboard';
    }

    if(auth.error){
    console.log(auth.error)

    }

    return (
        <>
        <div
            className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm bg-slate-200 rounded-md shadow-lg overflow-hidden font-mono ">
                <div className='flex justify-center items-center  '>
                    <img src={logo} alt="logo" className=" w-14 h-14"/>
                </div>
                <div className="p-4 space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-bold text-center text-gray-900">Admin Login</h2>
                        <p className="text-center text-gray-600">
                            Enter your email and password to access the admin panel
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="admin@example.com"
                                value={userData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="space-y-2 relative ">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={userData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 top-4 right-0 px-3 py-2 text-blue-600 text-sm focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className=" h-5"/> : <Eye className=" h-5"/>}
                                </button>

                        </div>

                        {auth.error && (
                            <div
                                className="bg-red-100 text-red-700 text-sm p-2 rounded-md flex items-center">
                                <AlertCircle className="w-4 h-4 mr-2"/>
                                {auth.error.message}
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <Lock className="w-4 h-4 mr-2"/> Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
</div>


</>
)
    ;
};

export default AdminAuth;
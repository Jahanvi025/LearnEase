import React, { useEffect, useState } from 'react';
import logo from '../../Assets/images/infinity (2).png';
import classNames from "classnames";
import { Bell, ChevronDown, LogOut, Settings, User } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import {logout} from "../../redux/slice/admin/adminAuthSlice";
import {useDispatch} from "react-redux";

const AdminNavbar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if (location.pathname === "/admin/dashboard") {
            setMenu("Overview");
        }
        if (location.pathname === "/admin/courses") {
            setMenu("Courses");
        }
        if (location.pathname === "/admin/students") {
            setMenu("Students");
        }
        if (location.pathname === "/admin/updates") {
            setMenu("Updates");
        }
    }, [location.pathname]);

    const [menu, setMenu] = useState();
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

    const handleLogout = () => {
        dispatch(logout());
        window.location.reload();
    }

    return (
        <>
            <nav className='w-full bg-neutral-950'>
                <div className='container flex justify-between items-center mx-auto h-16'>
                    <div className='flex items-center gap-2'>
                        <Link to='/'>
                            <div className='mx-auto px-2'>
                                <img src={logo} alt='logo' className='w-14 h-14' />
                            </div>
                        </Link>
                        <div className='text-2xl font-bold text-white'>Admin Panel</div>
                    </div>
                    <div className='flex items-center gap-6 bg-neutral-800 py-1.5 px-4 rounded-3xl mx-auto hover:cursor-pointer'>
                        <Link to='/admin/dashboard'>
                            <div onClick={() => setMenu("Overview")}
                                className={classNames('font-medium text-font transition-all duration-500', {
                                    'px-2 py-1 font-semibold bg-white text-neutral-950 rounded-3xl ': menu === 'Overview',
                                    'text-white': menu !== 'Overview'
                                })}>Overview
                            </div>
                        </Link>
                        <Link to='/admin/courses'>
                            <div onClick={() => setMenu("Courses")}
                                className={classNames('font-medium font-mono transition-all duration-500', {
                                    'px-2 py-1 font-semibold bg-white text-neutral-950 rounded-3xl ': menu === 'Courses',
                                    'text-white': menu !== 'Courses'
                                })}>Courses
                            </div>
                        </Link>
                        <Link to='/admin/students'>
                            <div onClick={() => setMenu("Students")}
                                className={classNames('font-medium font-mono transition-all duration-500', {
                                    'px-2 py-1 font-semibold bg-white text-neutral-950 rounded-3xl ': menu === 'Students',
                                    'text-white': menu !== 'Students'
                                })}>Students
                            </div>
                        </Link>
                        <Link to='/admin/updates'>
                            <div onClick={() => setMenu("Updates")}
                                className={classNames('font-medium font-mono transition-all duration-500', {
                                    'px-2 py-1 font-semibold bg-white text-neutral-950 rounded-3xl ': menu === 'Updates',
                                    'text-white': menu !== 'Updates'
                                })}>Updates
                            </div>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                            <Bell className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="ml-3 relative">
                        <div>
                            <button onClick={toggleProfileMenu}
                                className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                id="user-menu" aria-expanded="false" aria-haspopup="true">
                                <User className="h-6 w-6 text-white" />
                                <ChevronDown className="ml-1 h-5 w-5 text-neutral-400" />
                            </button>
                        </div>
                        {isProfileMenuOpen && (
                            <div
                                className="z-20 origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-neutral-950 ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                <Link to="/profile" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" role="menuitem">
                                    <User className="inline-block mr-2 h-5 w-5" /> Your Profile
                                </Link>
                                <Link to="/settings" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" role="menuitem">
                                    <Settings className="inline-block mr-2 h-5 w-5" /> Settings
                                </Link>
                                <button onClick={handleLogout} className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100" role="menuitem">
                                    <LogOut className="inline-block mr-2 h-5 w-5" /> Sign out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AdminNavbar;

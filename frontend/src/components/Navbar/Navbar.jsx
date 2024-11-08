import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { LogOut, Settings, User } from 'lucide-react';
import { FaUserCircle } from "react-icons/fa"; 
import logo from '../../Assets/images/infinity (1).png';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../redux/slice/authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); 
  const [menu, setMenu] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const currentPath = location.pathname;

  // Handle logout
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle profile dropdown
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  // Set active menu based on path
  useEffect(() => {
    if (currentPath === "/") {
      setMenu("Home");
    }
  }, [currentPath]);

  return (
    <nav className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img className="h-12 w-12" src={logo} alt="LearnHub Logo" />
            <h1 className="ml-2 text-xl font-semibold">LearnHub</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex  space-x-4">
            <Link 
              to="/" 
              className={`link-font w-[70px] px-4 py-2 rounded-md text-sm font-medium ${menu === "Home" ? "bg-black text-white" : "text-gray-700 hover:text-orange-500 hover:bg-gray-200"} transition-colors`}
              onClick={() => setMenu("Home")}
            >
              Home
            </Link>
            <Link 
              to="/courses"
              className={`link-font w-[88px] px-4 py-2 rounded-md text-sm font-medium ${menu === "Courses" ? "bg-black text-white" : "text-gray-700 hover:text-orange-500 hover:bg-gray-200"} transition-colors`}
              onClick={() => setMenu("Courses")}
            >
              Courses
            </Link>
            <Link 
              to="/services"
              className={`link-font w-[86px] px-4 py-2 rounded-md text-sm font-medium ${menu === "Services" ? "bg-black text-white" : "text-gray-700 hover:text-orange-500 hover:bg-gray-200"} transition-colors`}
              onClick={() => setMenu("Services")}
            >
              Services
            </Link>
            <Link 
              to="/teaching"
              className={`link-font w-[120px] px-4 py-2 rounded-md text-sm font-medium ${menu === "Teach" ? "bg-black text-white" : "text-gray-700 hover:text-orange-500 hover:bg-gray-200"} transition-colors`}
              onClick={() => setMenu("Teach")}
            >
              Teach Online
            </Link>
          </div>

          {/* User Authentication Links */}
          <div className="hidden lg:block">
            {userInfo.isAuthenticated ? (
              <div className="relative">
                <span className="mr-4 mb-2">Hello, {userInfo.user?.userName}</span>
                <div className="relative inline-block">
                  <div
                    onClick={toggleProfileMenu}
                    className="flex items-center cursor-pointer border border-gray-300 p-1 rounded-full hover:bg-gray-100 transition"
                  >
                    <FaUserCircle className="h-5 w-5 text-gray-600" />
                  </div>
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-2 bg-white ring-1 ring-black ring-opacity-5">
                      <Link 
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <User className="inline-block mr-2 h-4 w-4" /> Your Profile
                      </Link>
                      <Link 
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <Settings className="inline-block mr-2 h-4 w-4" /> Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="inline-block mr-2 h-4 w-4" /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-x-2">
                <button
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                  onClick={() => navigate('/login')}
                >
                  Login
                </button>
                <button
                  className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600" // Ensure the color works
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
              <RxHamburgerMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`block px-4 py-2 rounded-md text-base font-medium ${menu === "Home" ? "bg-black text-white" : "text-gray-700 hover:text-orange-500 hover:bg-gray-200"} transition-colors`}
            onClick={() => {
              setMenu("Home");
              setIsMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className={`block px-4 py-2 rounded-md text-base font-medium ${menu === "Courses" ? "bg-black text-white" : "text-gray-700 hover:text-orange-500 hover:bg-gray-200"} transition-colors`}
            onClick={() => {
              setMenu("Courses");
              setIsMenuOpen(false);
            }}
          >
            Courses
          </Link>
          <Link
            to="/services"
            className={`block px-4 py-2 rounded-md text-base font-medium ${menu === "Services" ? "bg-black text-white" : "text-gray-700 hover:text-orange-500 hover:bg-gray-200"} transition-colors`}
            onClick={() => {
              setMenu("Services");
              setIsMenuOpen(false);
            }}
          >
            Services
          </Link>
          <Link
            to="/teaching"
            className={`block px-4 py-2 rounded-md text-base font-medium ${menu === "Teach" ? "bg-black text-white" : "text-gray-700 hover:text-orange-500 hover:bg-gray-200"} transition-colors`}
            onClick={() => {
              setMenu("Teach");
              setIsMenuOpen(false);
            }}
          >
            Teach Online
          </Link>
          {userInfo.isAuthenticated ? (
            <div className="border-t border-gray-200 pt-4 z-20">
              <Link
                to="/profile"
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Your Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Settings
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="border-t border-gray-200 pt-4">
              <button
                className="block w-full px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="block w-full px-4 py-2 text-base font-medium bg-orange-500 text-white rounded-md hover:bg-orange-600" // Ensure this works
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

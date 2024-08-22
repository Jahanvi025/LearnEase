import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/images/infinity (1).png';
import {RxHamburgerMenu} from "react-icons/rx";

//Redux
import { useSelector, useDispatch } from 'react-redux';
import {FaUserCircle} from "react-icons/fa";
import {logout} from "../../redux/slice/authSlice";


const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  }

  const userInfo = useSelector((state) => state.user);

  console.log(userInfo)
  // console.log(auth.user?.profile.name)
console.log(userInfo.user?.userName)


  const [menu, setMenu] = useState("Home");

  return (
    <div>
      <nav className="w-full h-20 flex flex-row justify-around p-2 py-4 gap-14">
        <div className="flex flex-row gap-2 pt-2">
          <img className="h-12 w-12" src={logo} alt="logo" />
          <h1 className="text-xl pt-2">LearnHub</h1>
        </div>

        <div className="flex flex-row justify-center gap-3 pt-4 font-sans">
          <Link
            to="/"
            className={`link-font text-center w-20 ${menu === "Home" ? "activelink" : ""}`}
            onClick={() => setMenu("Home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`link-font text-center w-20 ${menu === "Courses" ? "activelink" : ""}`}
            onClick={() => setMenu("Courses")}
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className={`link-font text-center w-20 ${menu === "Services" ? "activelink" : ""}`}
            onClick={() => setMenu("Services")}
          >
            Services
          </Link>
          <Link
            to="/pricing"
            className={`link-font text-center w-20 ${menu === "Pricing" ? "activelink" : ""}`}
            onClick={() => setMenu("Pricing")}
          >
            Pricing
          </Link>
        </div>
        {userInfo.isAuthenticated ? (
            <div className="inline-block relative ">
                                <span className='mr-4'>
                                   Hello, {userInfo.user?.userName}
                                </span>
              <div className='group inline-block relative'>

                <div
                    className="flex bg-transparent border-2 hover:bg-white h-10 transition ease-out delay-150 hover:-translate-y-1 hover:scale-110   text-gray-950 hover:text-black py-2 px-4 rounded-3xl w-24 cursor-pointer">
                  <RxHamburgerMenu className='h-full font-bold text-5xl '/>
                  <FaUserCircle className=' h-full font-bold text-5xl '/>
                </div>
                <button onClick={handleLogout} className=' absolute bg-transparent border-2 hover:bg-white h-10 py-2 px-4 rounded-3xl w-24 block invisible group-hover:visible ' >
                  Logout
                </button>

              </div>
            </div>
        ) : (
            <div className="flex flex-row justify-center gap-2 pt-2 font-sans">
              <button
                  className=" text-center link-font w-28 h-10 border-solid border-[3px] border-neutral-400 rounded-xl"
                  onClick={() => navigate('/login')}>Login
              </button>
              <button
                  className="link-font text-center mb-11 text-white backgroundgrad w-28 h-10 hover:bg-gray-700 rounded-xl"
                  onClick={() => navigate('/signup')}>Sign Up
              </button>
            </div>
        )}

      </nav>
    </div>
  );
};

export default Navbar;
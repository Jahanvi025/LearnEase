import React, { useState, useEffect } from 'react';
import mainimg from "../Assets/images/right2 (2).png";
import iconstar from "../Assets/images/star.png";
import { useNavigate } from "react-router-dom";

const Container = () => {
  const navigation = useNavigate();
  const [search, setSearch] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setIsSearchEmpty(true);
      return;
    }
    navigation(`/search?q=${search}`);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (isSearchEmpty) setIsSearchEmpty(false);
  };

  return (
    <div className="dark:bg-white w-full h-svh">
      <div className="flex flex-col justify-center items-center px-6 md:px-28">
        <div className={`h-4/6 pt-10 flex flex-col md:flex-row justify-between items-center gap-5 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Left Section with Heading and Description */}
          <div className={`pt-5 lg:w-1/2 space-y-6 transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl w-fit font-black text-orange-500">
              Grow 
              <span className="text-4xl sm:text-6xl md:text-7xl text-neutral-950 z-10"> your skills <br /> and advance </span>
              your 
            </h1>
            <div className="flex flex-col md:flex-row gap-5 w-full md:w-96 mt-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black z-10 text-orange-500">career</h1>
              <div className="flex flex-row mt-2">
                {/* Icons with hover scale effect */}
                <img src={iconstar} className='h-12 w-12 md:h-16 md:w-16 transition-transform duration-300 hover:scale-110' alt="star icon" />
                <img src={iconstar} className='h-12 w-12 md:h-16 md:w-16 transition-transform duration-300 hover:scale-110' alt="star icon" />
                <img src={iconstar} className='h-12 w-12 md:h-16 md:w-16 transition-transform duration-300 hover:scale-110' alt="star icon" />
              </div>
            </div>
            <p className="text-xl mt-6 max-w-lg text-neutral-700 text-font">
              The best online course platform for creating, selling, and promoting your online courses. Start monetizing your skills, experiences, and your audience.
            </p>
          </div>

          {/* Right Section with Image */}
          <div className="pt-5 lg:w-1/2 relative">
            <img className='w-full md:w-[640px] rounded-2xl transition-transform duration-500 hover:scale-105' src={mainimg} alt="mainimg" />
          </div>
        </div>

        {/* Search Section with Animation */}
        <div className="w-full flex flex-col gap-5 h-36 rounded-xl bg-neutral-200 mt-10 shadow-custom-heavy transition-all duration-500 ease-in-out transform">
          <div className="pl-5 md:pl-10 pt-5">
            <h2>Buy <span className='text-neutral-500 pl-1'>Courses</span></h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between px-5 md:px-8 gap-5 md:gap-0">
            {/* Search Input with Hover and Focus Animation */}
            <div>
              <form onSubmit={handleSearch} className="form relative">
                <span className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                  <svg
                    width="17"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="search"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                      stroke="currentColor"
                      strokeWidth="1.333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder='Search courses'
                  value={search}
                  onChange={handleChange}
                  className='placeholder:text-font w-40 sm:w-52 input rounded-full px-8 py-3 border-2 bg-orange-600 focus:outline-none focus:border-white focus:bg-orange-700 placeholder-gray-200 transition-all duration-300 shadow-md hover:bg-orange-700'
                />
              </form>
            </div>

            {/* Text Description */}
            <div className='flex flex-col gap-1 text-center md:text-left'>
              <p className='text-font'>Explore a wide variety of courses tailored</p>
              <p className='text-font'>to your interests and career goals.</p>
            </div>

            {/* Stats Section with Staggered Animation */}
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center bg-white rounded-2xl px-5 py-3 mt-[-16px] transition-all duration-1000">
              <div className="flex flex-col gap-1 text-center transition-all duration-700 delay-300 ease-in-out transform">
                <h2 className="text-2xl font-bold">200+</h2>
                <p className="text-font">Online Courses</p>
              </div>

              <hr className="h-8 w-px bg-gray-400 border-0 hidden md:block" />

              <div className="flex flex-col gap-1 text-center transition-all duration-700 delay-500 ease-in-out transform">
                <h2 className="text-2xl font-bold">80k+</h2>
                <p className="text-font">Active Students</p>
              </div>

              <hr className="h-8 w-px bg-gray-400 border-0 hidden md:block" />

              <div className="flex flex-col gap-1 text-center transition-all duration-700 delay-700 ease-in-out transform">
                <h2 className="text-2xl font-bold">50+</h2>
                <p className="text-font">Expert Teachers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

import React from 'react';
import laptopimg from '../Assets/images/3d-rendering-laptop.png'
import CourseCategory from './CourseCategory';
const Container = () => {
  return (
    <>
      <div className="custom-shape-divider-top-1723480175 relative">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 320"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full z-0"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
              <stop offset="25%" style={{ stopColor: '#FF4500', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#FF69B4', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFFF00', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,224 C150,100 350,100 600,200 C850,300 1050,250 1200,200 V0 H0 V224 Z"
            fill="url(#gradient)"
          ></path>
        </svg>

        <ul className="circles z-0">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className=' flex flex-col justify-center align-middle items-center'>
          <div className="absolute right-0 bottom-8 px-[104px] pt-10 flex flex-row justify-between align-center gap-48 z-10" style={{ transform: 'rotate(-180deg)' }}>
            <div className='pt-10'>
              <span className="w-20 h-2 z-10 bg-white dark:bg-white mb-12 absolute"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex z-10 flex-col leading-none dark:text-white text-gray-800 pt-2">
                Choose
                <span className="text-5xl  dark:text-white z-10 sm:text-7xl">
                  Your Path
                </span>
              </h1>
              <p className="text-sm z-10 mt-4 sm:text-base text-gray-700 dark:text-white text-font">
                Discover personalized learning experiences that empower you to achieve your goals, one course at a time.
              </p>
            </div>
            <div className="pb-10">
              <img className='w-[530px] ' src={laptopimg} alt="" />
            </div>
          </div>
          <div className="w-[84%] flex flex-col gap-5 z-10 absolute right-0 top-[-140px] h-36 rounded-xl bg-white mx-[110px] mt-40 shadow-custom-heavy" style={{ transform: 'rotate(-180deg)' }}>
            <div>
              <h2 className='pl-10 pt-6 '>Buy <span className='text-neutral-500 pl-1'>Courses</span></h2>
              <span class="w-5 h-[2px] left-[45px] bottom-14 bg-gray-800 dark:bg-black mb-12 absolute">
              </span>
            </div>
            <div className="flex flex-row justify-between px-10 pt-4 " >

              <div className="">
                <form className="form relative">
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
                  <input type="text" placeholder='Search courses' className='placeholder:text-font w-52 input rounded-full px-8 py-3 border-2 bg-orange-600 focus:outline-none focus:border-white placeholder-gray-200 transition-all duration-300 shadow-md' />
                </form>
              </div>
              <div className='flex flex-col gap-[26px] pt-2'>
                <p className='text-font'>Explore a wide variety of courses tailored </p>
                <p className='text-font'>to your interests and career goals.</p>
              </div>
              <div className="flex flex-row justify-center gap-6 items-center">
                <div className="flex flex-col gap-3 text-center">
                  <h2 className="text-2xl font-bold">200+</h2>
                  <p className="text-font">Online Courses</p>
                </div>

                <hr className="h-8 w-px bg-gray-400 border-0" />

                <div className="flex flex-col gap-3 text-center">
                  <h2 className="text-2xl font-bold">80k+</h2>
                  <p className="text-font">Active Students</p>
                </div>

                <hr className="h-8 w-px bg-gray-400 border-0" />

                <div className="flex flex-col gap-3 text-center">
                  <h2 className="text-2xl font-bold">50+</h2>
                  <p className="text-font">Expert Teachers</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <CourseCategory />
    </>
  );
};

export default Container;

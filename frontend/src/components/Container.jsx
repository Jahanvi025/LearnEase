import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import girl from "../Assets/images/front-view-young-female-student-red-t-shirt-holding-copybook-smiling-white.png";

const Container = () => {
  const [search, setSearch] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setIsSearchEmpty(true);
      return;
    }
    navigate(`/search?q=${search}`);
  };

  const handleReset = () => {
    setSearch('');
    setIsSearchEmpty(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (isSearchEmpty) setIsSearchEmpty(false);
  };

  return (
    <div className="inset-0 -z-10 h-[60vh] w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#FFC900,transparent)]">
        <div className="flex lg:w-full items-center mx-auto container h-full">
          <section className="flex flex-row items-center justify-between bg-transparent w-full h-full">
            <div className="flex flex-col items-start p-12 w-2/3 bg-transparent">
              <h1 className="text-7xl mt-6 text-gray-950 text-left font-bold mb-4 font-sans">Transform Your Learning Experience</h1>
              <p className="text-gray-600 text-left mt-2 mb-8 font-sans">
                Talent Sourcer is a cutting-edge online platform that empowers both job seekers and
                professionals to navigate the dynamic world of careers and talent acquisition.
              </p>
              <div className="flex space-x-3 mb-8">
                <form onSubmit={handleSearch} className="form relative">
                  <span className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                    <svg
                      width="17"
                      height="16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-labelledby="search"
                      className="w-5 h-5 text-gray-700"
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
                    className="w-52 input rounded-full px-8 py-3 border-2 focus:outline-none focus:border-black placeholder-gray-500 transition-all duration-300 shadow-md"
                    placeholder="Search for job.."
                    type="text"
                    value={search}
                    onChange={handleChange}
                  />
                  {search && (
                    <button onClick={handleReset} type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  )}
                </form>
                <form className="form relative">
                  <GrLocation className='absolute left-2 -translate-y-1/2 top-1/2 p-1 w-7 h-7 text-gray-700' />
                  <input
                    type="text"
                    placeholder="Job location"
                    className="w-44 input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-black placeholder-gray-500 transition-all duration-300 shadow-md"
                  />
                </form>
                <form className="form relative">
                  <HiOutlineOfficeBuilding className='absolute left-2 -translate-y-1/2 top-1/2 p-1 w-7 h-7 text-gray-700' />
                  <input
                    type="text"
                    placeholder="Department"
                    className="w-44 input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-black placeholder-gray-500 transition-all duration-300 shadow-md"
                  />
                </form>
                <button
                  type='submit'
                  className="ml-1 w-40 px-6 py-2 bg-black text-white rounded-full active:bg-dark transition-all duration-300 shadow-xl"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 w-1/3">
              <img src={girl} alt="girlimg" className='h-[60vh] pb-1 w-auto max-w-full' />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Container;

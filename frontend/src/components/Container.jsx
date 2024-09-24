import React, {useState} from 'react';
import mainimg from "../Assets/images/right2 (2).png"
import iconstar from "../Assets/images/star.png"
import {useNavigate} from "react-router-dom";

const Container = () => {
    const navigation = useNavigate();
    const [search, setSearch] = useState('');
    const [isSearchEmpty, setIsSearchEmpty] = useState(false);

    const handleSearch = ( e ) => {
        e.preventDefault();
        if (!search.trim()) {
            setIsSearchEmpty(true);
            return;
        }
        navigation(`/search?q=${search}`);
    }

    const handleChange = ( e ) => {
        setSearch(e.target.value);
        if (isSearchEmpty) setIsSearchEmpty(false);
    }
    return (
        <>
            <div className="dark:bg-white w-full h-svh">
                <div className='flex flex-col justify-center align-middle items-center px-28'>
                    <div className=" h-4/6 pt-10 flex flex-row justify-between align-center gap-5">
                        <div className='pt-5'>
                            <h1 className="text-7xl w-fit font-black text-orange-500">
                               Grow 
                                <span className="text-7xl text-neutral-950 z-10"> your skills <br />and advance </span>
                                your 
                                
                            </h1>
                            <div className="flex flex-row gap-5 w-96">
                            <h1 className="text-6xl font-black z-10 text-orange-500">career </h1>
                            <div className="flex flex-row mt-2">
                                <img src={iconstar} className='h-16 w-16' alt="starticon" />
                                <img src={iconstar} className='h-16 w-16' alt="starticon" />
                                <img src={iconstar} className='h-16 w-16' alt="starticon" />
                            </div>
                            </div>
                            <p className="text-sm mt-6 max-w-xl sm:text-base text-neutral-700 text-font">
                                The best online course platform for creating, selling and promoting your online courses. Start monetizing your skills, experiences and your audience.
                            </p>
                        </div>
                        <div className="pt-5">
                            <img className='w-[640px] rounded-2xl' src={mainimg} alt="mainimg"/>
                        </div>
                    </div>
                    <div
                        className="w-[100%] flex flex-col gap-5 h-36 rounded-xl bg-neutral-200 mx-22 mt-16 shadow-custom-heavy"
                        >
                        <div>
                            <h2 className='pl-10 pt-5 '>Buy <span className='text-neutral-500 pl-1'>Courses</span></h2>
                        </div>
                        <div className="flex flex-row justify-between px-8">

                            <div className="">
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
                                    <input type="text" placeholder='Search courses' value={search}
                                           onChange={handleChange}
                                           className='placeholder:text-font w-52 input rounded-full px-8 py-3 border-2 bg-orange-600 focus:outline-none focus:border-white placeholder-gray-200 transition-all duration-300 shadow-md'/>
                                </form>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-font'>Explore a wide variety of courses tailored </p>
                                <p className='text-font'>to your interests and career goals.</p>
                            </div>
                            <div className="flex flex-row justify-center gap-6 items-center bg-white rounded-2xl px-5 py-3 mt-[-16px]">
                                <div className="flex flex-col gap-1 text-center">
                                    <h2 className="text-2xl font-bold">200+</h2>
                                    <p className="text-font">Online Courses</p>
                                </div>

                                <hr className="h-8 w-px bg-gray-400 border-0"/>

                                <div className="flex flex-col gap-1 text-center">
                                    <h2 className="text-2xl font-bold">80k+</h2>
                                    <p className="text-font">Active Students</p>
                                </div>

                                <hr className="h-8 w-px bg-gray-400 border-0"/>

                                <div className="flex flex-col gap-1 text-center">
                                    <h2 className="text-2xl font-bold">50+</h2>
                                    <p className="text-font">Expert Teachers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Container;

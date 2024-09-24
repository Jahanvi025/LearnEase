import React from 'react';
import { Link } from 'react-router-dom';
import imageleft from "../../Assets/images/right2 (4).png"
const WhoWeAre = () => {
    return (
        <>
           <div className="w-full h-96 bg-white my-28 px-10">
            <div className="flex flex-row justify-center gap-14 h-screen mx-24">
                <img src={imageleft} alt="advertiseimg" className='w-max h-96' />
                <div className='mt-10'>
                <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-8"><span className='text-orange-500'>Who</span> We Are</h1>
                <div className=''>
                <p className='text-font text-neutral-700'>We are a team of three passionate creators building a user-friendly Learning Management System. Our mission is to simplify online education and enhance the learning experience.</p>
                <p className='text-font text-neutral-700 mt-5'>Together, we bring expertise in technology, design, and education to create a platform for students and educators. We're committed to making learning accessible and engaging for all.</p>
                </div>
                <Link to="/aboutus">
                <button className='bg-neutral-950 w-fit p-3 mt-5 text-white text-font rounded-2xl'>Find More About Us</button>
                </Link>
                </div>
            </div>
           </div> 
        </>
    );
};

export default WhoWeAre;
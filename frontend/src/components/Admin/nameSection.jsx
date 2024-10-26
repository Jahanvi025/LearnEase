import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';


const NameSection = () => {
    return (
        <>
            <div className="relative h-96 w-full bg-neutral-950">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
                    <div className='flex justify-between container mx-auto my-10 ' >
                        <div className=''>
                            <h1 className='text-4xl font-light mt-14 text-white '>Welcome Back, Harsh</h1>
                            <p className=' text-neutral-400 text-font text-lg mt-4'>Efficiently manage your courses and students while enhancing  </p>
                            <p className=' text-neutral-400 text-font text-lg '>communication and tracking progress. </p>
                            <Link to='/admin/courses/add-course'>
                                <button className='flex gap-2 items-center px-4 mt-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 hover:duration-300 hover:shadow-orange-200 hover:shadow-sm'>
                                    <Plus className='w-7 h-7'/>
                                    <span className='font-semibold'>Add Course</span>
                                </button>
                            </Link>
                        </div>
                        <div className='flex items-center ' >
                        <img className='rounded-2xl mx-auto z-10 transition-transform duration-500 hover:scale-105' src="https://media.istockphoto.com/id/1300822108/photo/group-of-unrecognisable-international-students-having-online-meeting.jpg?s=612x612&w=0&k=20&c=-X6IUTSdDMfJrFdQFhrDuwhnMrM1BLjfrLzydpibCTA=" alt="img" />
                
                            
                        </div>

                    </div>
                     </div>
            </div>
            <div className="bg-orange-500 h-24"></div>
        </>
    );
};

export default NameSection;
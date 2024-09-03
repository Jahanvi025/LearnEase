import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';


const NameSection = () => {
    return (
        <>
            <div className="relative h-80 w-full bg-slate-950">
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
                    <div className='flex justify-between container mx-auto my-10 ' >
                        <div className=''>
                            <h1 className='text-4xl font-light text-white '>Welcome Back, Harsh</h1>
                            <p className=' text-slate-400 font-serif text-lg '>Manage your courses and students</p>
                        </div>
                        <div className='flex items-center ' >
                            <Link to='/admin/add-course'>
                                <button className='flex gap-2 items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 hover:duration-300 hover:shadow-amber-200 hover:shadow-sm'>
                                    <Plus className='w-7 h-7'/>
                                    <span className='font-semibold'>Add Course</span>
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default NameSection;
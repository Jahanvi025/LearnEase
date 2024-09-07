import React, { useEffect } from 'react';
import {UsersRound, IndianRupee, BookOpen} from "lucide-react";
import {useNavigate} from "react-router-dom";

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../../redux/slice/admin/coursesSlice';

const AllCourses = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { courses, loading, error } = useSelector((state) => state.courses);

    useEffect(() => {
        dispatch(fetchCourses());
        console.log(courses)
    }, [dispatch]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <>
            <div className='container mx-auto px-4 py-8'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className="text-3xl text-font font-bold">Manage Courses</h2>
                    <button onClick={()=>{
                        navigate('/admin/courses/add-course')
                    }} className='bg-yellow-900 text-white px-4 py-2 rounded-xl'>Add Course</button>
                </div>


                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 '>
                    {courses.map(course => (
                        <div key={course._id} className=' bg-white p-6 border border-gray-100 shadow-md hover:shadow-xl rounded-xl overflow-hidden'>
                            <div className='flex justify-center items-center' >
                                <img src={course.thumbnail} alt={course.title} className=' w-full h-52 object-cover'/>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-2xl text-font font-bold '>{course.title}</h1>
                                <div className='flex justify-start mt-2'>
                                    <p className='text-font text-sm py-1 font-semibold px-2 text-center border-2 border-slate-200  rounded-3xl'>
                                        {course.category}
                                    </p>
                                </div>
                                <div className=' mt-4 flex justify-start items-center'>
                                <UsersRound className='h-5 ' />
                                <p className='text-gray-500 text-font font-semibold text-sm ml-1'>{course.students.length} Students</p>
                                </div>
                                <div className='flex gap-1 mt-2 py-2'>
                                    {course.tags.map((tag,index) => (
                                        <span key={index} className='bg-gray-100 border border-slate-200 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full'>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className='flex justify-between  mt-4'>
                                <div className='flex items-center'>
                                    <IndianRupee className='h-5' />
                                    <p className='text-font text-lg font-semibold ml-1'>{course.price}</p>
                                </div>
                                <div className='flex ' >
                                    <button onClick={() => {
                                        navigate(`${course._id}`)
                                    }} className=' border-2 flex  items-center gap-2 border-slate-100 hover:bg-gray-100 px-4 py-2 rounded-xl'><BookOpen className='h-5 w-5' /> Preview </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AllCourses;

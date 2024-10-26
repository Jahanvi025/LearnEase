import React, {useEffect} from 'react';
import {useLocation,useNavigate} from "react-router-dom";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseBySearch} from "../../redux/slice/admin/coursesSlice";
import {BookOpen, IndianRupee, UsersRound} from "lucide-react";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}
const SearchResult = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

const query = useQuery();
const searchQuery = query.get('q')? query.get('q').toLowerCase(): null;
const {courses} = useSelector(state => state.courses);

    useEffect(() => {
        dispatch(fetchCourseBySearch(searchQuery));
    }, [dispatch, searchQuery]);

    console.log(courses)

    // console.log(fetchedCourses)

    return (
        <>
            <div className='container mx-auto px-4 py-8' >
                <div className='items-center flex my-10' >
                    <h2 className='text-2xl text-font font-bold capitalize'>Search Results for {searchQuery} </h2>
                </div>

                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                    {courses.map((course) => (
                        <div key={course._id}
                             className=' bg-white p-6 border border-gray-100 shadow-md hover:shadow-xl rounded-xl overflow-hidden'>
                            <div className='flex justify-center items-center'>
                                <img src={course.thumbnail} alt={course.title} className=' w-full h-52 object-cover'/>
                            </div>
                            <div className='mt-5'>
                                <h1 className='text-2xl text-font font-bold '>{course.title}</h1>
                                <div className='flex justify-start mt-2'>
                                    <p className='text-font text-sm py-1 font-semibold text-orange-500 px-2 text-center border-2 border-slate-200  rounded-3xl'>
                                        {course.category}
                                    </p>
                                </div>
                                <div className=' mt-4 flex justify-start items-center'>
                                    <UsersRound className='h-5 '/>
                                    <p className='text-gray-500 text-font font-semibold text-sm ml-1'>{course.students.length} Students</p>
                                </div>
                                <div className='flex gap-1 mt-2 py-2'>
                                {course.tags.slice(0, 3).map((tag, index) => (
                                    <span key={index} className='bg-gray-100 text-center flex items-center border border-slate-200 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full'>
                                    {tag}
                                    </span>
                                ))}
                                </div>
                            </div>
                            <div className='flex justify-between  mt-4'>
                                <div className='flex items-center'>
                                    <IndianRupee className='h-5'/>
                                    <p className='text-font text-lg font-semibold ml-1'>{course.price}</p>
                                </div>
                                <div className='flex '>
                                    <button onClick={() => {
                                        navigate(`${course._id}`)
                                    }}
                                            className=' border-2 flex  items-center gap-2 border-slate-100 hover:bg-gray-100 px-4 py-2 rounded-xl'>
                                        <BookOpen className='h-5 w-5'/> Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default SearchResult;
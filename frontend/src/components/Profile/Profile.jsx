import React, {useEffect, useState} from 'react';

//Redux
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseById} from "../../redux/slice/admin/coursesSlice";
import {Link} from "react-router-dom";


// Main Profile component
const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(( state ) => state.user);
    const [courser, setCourser] = useState([])
    const [fetchCourse, setFetchCourse] = useState([])
    useEffect(() => {
        if (user.status === 'succeeded') {



            const fetchAllCourses = async () => {
                const courseIds = user.user.courses;
                try {
                    const fetchedCourses = await Promise.all(
                        courseIds.map(id => dispatch(fetchCourseById(id)).unwrap())
                    );
                    setCourser(fetchedCourses);
                } catch (error) {
                    console.error("Error fetching courses:", error);
                }
            };
            fetchAllCourses();
        }
    }, [user, dispatch]);


    console.log(courser)

    if (user.status === 'idle') {
        return <h1>Loading...</h1>
    }
    if (user.status === 'loading') {
        return <h1>Loading...</h1>
    }
    return (
        <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Profile Card */}
                <div className="bg-white shadow-lg border border-orange-500 mb-8 rounded-lg">
                    <div
                        className="border-b border-orange-200 p-6 flex flex-col md:flex-row md:items-center md:space-x-4">
                        <img
                            src="https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-103130.jpg?semt=ais_hybrid"
                            alt="Avatar"
                            className="w-24 h-24 mb-4 md:mb-0 rounded-full border-2 border-orange-500"
                        />
                        <div>
                            <h1 className="text-2xl md:text-4xl text-black mb-2">{user.user.userName}</h1>
                            <p className="text-gray-600 text-lg">{user.user.email}</p>
                        </div>
                    </div>
                </div>

                {/* Enrolled Courses Section */}
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Enrolled Courses</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {courser.length === 0 && (
                        <div className="text-center col-span-2 md:col-span-4">
                            <h2 className="text-xl font-semibold text-gray-600">No Enrolled Course</h2>
                        </div>
                    )
                    }
                    {courser.map(( course ) => (
                        <Link to={`/course/enrolled/${course.course._id}`}>
                        <div key={course.id}
                             className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-lg">
                            <img
                                src={course.course.thumbnail}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2 text-black">{course.course.title}</h3>
                                <p className="text-gray-600 mb-4">{course.course.description}</p>
                                <div className="flex items-center justify-between">
                                </div>
                            </div>
                        </div>
                            </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;

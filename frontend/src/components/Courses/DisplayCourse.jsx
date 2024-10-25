import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchCourseBySearch } from "../../redux/slice/admin/coursesSlice";
import Item from "../Courses/Item.jsx";

const DisplayCourse = ({ selectedCategory }) => {
    const dispatch = useDispatch();
    const category = selectedCategory.toLowerCase();
    console.log(category);
    const { courses, loading, error } = useSelector(state => state.courses);

    useEffect(() => {
        dispatch(fetchCourseBySearch(category));
    }, [dispatch, category]);

    return (
        <div className='courses_data_container display grid gap-6 bg-neutral-950'>
            <div className='courses_data_container grid grid-cols-4 grid-rows-2 gap-6'>
                {courses.slice(0, 6).map((course) => (
                    <Item
                        key={course._id} // This key is for React's internal tracking
                        courseKey={course._id} // This is the prop you pass to Item for linking
                        image={course.thumbnail}
                        title={course.title}
                        category={course.category}
                        price={course.price}
                        tags={course.tags}
                        students={course.students.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default DisplayCourse;

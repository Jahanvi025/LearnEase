import React, {useEffect} from 'react';
import data_course from '../../Assets/data.js';
import Item from "../Courses/Item.jsx";

//Redux
import {useSelector, useDispatch} from "react-redux";
import {fetchCourseBySearch} from "../../redux/slice/admin/coursesSlice";


const DisplayCourse = ({ selectedCategory }) => {
    const dispatch = useDispatch();
const category = selectedCategory.toLowerCase();
    const { courses, loading, error } = useSelector(state => state.courses);
    useEffect(() => {
        dispatch(fetchCourseBySearch(category));
    }, [dispatch, category]);
    console.log(courses)

  return (
      <div className='courses_data_container'>
        <div className='course_list'>
            {courses.map((course) => (
                <Item
                    key={course._id}
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
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
          {courses.length > 0 ? (
              courses.map(course => (
                  <Item
                      key={course.title}
                      image={course.image}
                      name={course.title}
                      instructor={course.instructors.join(', ')}
                      rating={course.rating.value}
                      reviews={course.rating.reviews}
                      new_price={course.price.current}
                      old_price={course.price.original}
                  />
              ))
          ) : (
              <p>No courses found for the selected category.</p>
          )}
        </div>
      </div>
  );
};

export default DisplayCourse;
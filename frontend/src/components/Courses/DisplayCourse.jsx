import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourseBySearch } from '../../redux/slice/admin/coursesSlice';
import Item from '../Courses/Item';

export default function DisplayCourse({ selectedCategory = '' }) {
  const dispatch = useDispatch();
  const category = selectedCategory.toLowerCase();
  const { courses = [] } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourseBySearch(category));
  }, [dispatch, category]);

  return (
    <div className='bg-neutral-950 p-4 md:p-6 lg:p-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
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
}
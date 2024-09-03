import React from 'react';
import data_course from '../../Assets/data.js'; // Ensure this path is correct
import Item from "../Courses/Item.jsx"
const DisplayCourse = ({ selectedCategory }) => {
  // Combine all courses into a single array
  const allCourses = [
    ...data_course.webDevelopment,
    ...data_course.leadership,
    ...data_course.dataScience,
    ...data_course.communication
  ];

  // Filter courses based on the selected category
  const filteredCourses = allCourses.filter(course =>
    selectedCategory ? course.title.toLowerCase().includes(selectedCategory.toLowerCase()) : true
  );

  return (
    <div className='courses_data_container'>
      <div className='course_list'>
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <Item
              key={course.title}
              image={course.image}  // Assuming `course.image` exists, else remove this line
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

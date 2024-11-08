import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayCourse from '../components/Courses/DisplayCourse';

const CourseCategory = () => {
  // Set default category to "Web Development"
  const [category, setCategory] = useState('Web Development');

  // Function to handle button clicks
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const categories = ['Web Development', 'Leadership', 'Data Science', 'Communication'];

  return (
    <div className='w-full h-fit mb-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-10 bg-neutral-950'>
      <h1 className='text-2xl sm:text-3xl text-neutral-100 font-bold mb-2 text-center'>
        All the skills you need in one place
      </h1>
      <p className='text-base sm:text-lg text-font text-neutral-100 mb-6 text-center'>
        From critical skills to technical topics, LearnHub supports your professional development.
      </p>

      {/* Category buttons */}
      <div className='flex flex-wrap justify-center gap-3 sm:gap-5 mb-6'>
        {categories.map((categoryName) => (
          <button
            key={categoryName}
            className={`text-neutral-400 text-font font-medium py-2 rounded-2xl border-solid border-2 border-neutral-400 transition-all px-3 sm:px-4 w-max text-xs sm:text-sm duration-300 ease-in-out ${
              category === categoryName ? 'text-white bg-orange-500 border-orange-600' : 'border-b-2 text-neutral-400'
            } hover:text-neutral-100`}
            onClick={() => handleCategoryChange(categoryName)}
          >
            {categoryName.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>

      {/* Display selected category */}
      <div className='w-full'>
        <DisplayCourse selectedCategory={category} />
      </div>

      {/* Explore More Button */}
      <div className='flex justify-center'>
        <Link to='/courses'>
          <button className='text-center w-max h-10 rounded-2xl bg-white mt-10 px-4 text-orange-500 text-sm sm:text-base'>
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCategory;

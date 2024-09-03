import React, { useState } from 'react';
import DisplayCourse from '../components/Courses/DisplayCourse';

const CourseCategory = () => {
  // Set default category to "Web Development"
  const [category, setCategory] = useState("Web Development");

  // Function to handle button clicks
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <div className='w-full h-[90vh] my-8 px-32 py-10'>
      <h1 className='text-3xl font-bold mb-2'>All the skills you need in one place</h1>
      <p className='text-lg text-neutral-950 mb-6 text-font'>From critical skills to technical topics, LearnHub supports your professional development.</p>

      <div className='flex gap-5 mb-6'>
        {['Web Development', 'Leadership', 'Data Science', 'Communication', 'Business Analytics and Intelligence'].map(categoryName => (
          <button
            key={categoryName}
            className={`text-lg text-neutral-950 font-medium py-2 px-1 transition-all duration-300 ease-in-out ${category === categoryName ? 'border-b-2 border-orange-500 text-neutral-950' : 'border-b-2 border-transparent text-neutral-400'} hover:text-neutral-950`}
            onClick={() => handleCategoryChange(categoryName)}
          >
            {categoryName}
          </button>
        ))}
      </div>
      <div className="w-[100%] h-[50vh] bg-neutral-200">
      <DisplayCourse selectedCategory={category} />

      </div>
    </div>
  );
};

export default CourseCategory;

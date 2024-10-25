import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayCourse from '../components/Courses/DisplayCourse';

const CourseCategory = () => {
    // Set default category to "webDevelopment"
    const [category, setCategory] = useState("Web Development");


    // Function to handle button clicks
    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className='w-full h-fit mb-8 px-32 py-10 bg-neutral-950'>
            <h1 className='text-3xl text-neutral-100 font-bold mb-2 text-center'>All the skills you need in one place</h1>
            <p className='text-lg text-neutral-100 mb-6 text-font text-center'>From critical skills to technical topics, LearnHub supports your professional development.</p>

            <div className='flex justify-center gap-5 mb-6'>
                {['Web Development', 'leadership', 'DataScience', 'communication'].map(categoryName => (
                    <button
                        key={categoryName}
                        className={` text-neutral-400 font-medium py-2 rounded-2xl border-solid border-2 border-neutral-400 transition-all text-font px-4 w-max text-sm duration-300 ease-in-out ${category === categoryName ? ' text-white bg-orange-500 border-orange-600' : 'border-b-2 text-neutral-400'} hover:text-neutral-100 `}
                        onClick={() => handleCategoryChange(categoryName)}
                    >
                        {categoryName.replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                ))}
            </div>
            <div className="w-[100%]">
                <DisplayCourse selectedCategory={category} />
            </div>
            <div className='flex justify-center'>
            <Link to="/courses">
            <button className='text-center w-max text-font h-10 rounded-2xl bg-white mt-10 px-4  text-orange-500'>Explore More</button>
            </Link>
            </div>
        </div>
    );
};

export default CourseCategory;
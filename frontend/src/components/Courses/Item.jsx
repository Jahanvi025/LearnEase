import React from 'react';
import { useNavigate } from "react-router-dom";
import whitestar from "../../Assets/images/star (1).png";

const Item = ({ image, title, courseKey, category, price, tags, students }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle click and navigate to the course detail page
  const handleClick = () => {
    navigate(`/courses/${category}/${courseKey}`); // Ensure leading slash for absolute path
  };

  return (
      <div
          className='course_item w-70 flex flex-col h-auto pb-4 bg-neutral-800 rounded-2xl border-solid border-2 border-neutral-700 cursor-pointer overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1' // Added cursor for better UX
          onClick={handleClick} // Handle click to navigate
          role="button" // For accessibility
          tabIndex={0} // For keyboard navigation
          onKeyPress={( e ) => {
            if (e.key === 'Enter') handleClick(); // Allow navigation via keyboard
          }}
      >
        <img src={image} alt={title} className='w-full object-cover h-40 rounded-t-2xl'/>
        <div className="flex flex-row justify-between align-middle px-2">
          <div className="flex flex-row gap-2 mt-4 align-middle">
            <img src={whitestar} alt="star" className='w-4 h-4'/>
            <p className='text-neutral-400 text-font text-sm'>4.6</p>
          </div>
          <div className="flex flex-row gap-1 mt-4 align-middle">
            <p className='text-neutral-400 text-font text-sm'>{price},</p>
            <p className='text-neutral-400 text-font text-sm'>{students} Students</p>
          </div>
        </div>
        <h3 className='font-sans text-lg font-light text-neutral-100 px-2 mt-2'>{category}</h3>
        
        <h3 className='font-sans text-lg font-light text-neutral-100 px-2'>{title}</h3>
       
        <div className='course_tags text-neutral-400 mt-4 text-font text-xs text-font flex flex-wrap gap-1 px-2'>
          {tags.map(( tag, index ) => (
              <span key={index} className='tag'>{tag}</span>
          ))}
        </div>
       
      </div>
  );
};

export default Item;

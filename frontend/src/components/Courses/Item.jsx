import React from 'react';

const Item = ({ image, title,key ,category ,price, tags, students}) => {
  return (
    <div className='course_item flex flex-col justify-center rounded-2xl drop-shadow-sm'>
      <img src={image} alt="course" className='w-52 h-52 rounded-2xl object-cover'/>
      <div className='px-5 py-8 mt-5'>
      <h1 className='text-xl text-font font-semibold '>{title}</h1>
      <p>{}</p>
      </div>

    <div className='course_item'>
      <img src={image} alt={title} className='w-10 h-16' />
      <h3 className='course_name'>{title}</h3>
        <p className='course_category'>{category}</p>
        <p className='course_price'>{price}</p>
        <p className='course_students'>{students} Students</p>
        <div className='course_tags'>
            {tags.map((tag, index) => (
                <span key={index} className='tag'>{tag}</span>
            ))}
        </div>


    </div>
    </div>
   
  );
};

export default Item;
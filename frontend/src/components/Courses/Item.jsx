import React from 'react';

const Item = ({ image, title,key ,category ,price, tags, students}) => {
  return (
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
  );
};

export default Item;
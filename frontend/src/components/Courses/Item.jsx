import React from 'react';

const Item = ({ image, name, instructor, rating, reviews, new_price, old_price }) => {
  return (
    <div className='course_item'>
      <img src={image} alt={name} className='course_image' />
      <h3 className='course_name'>{name}</h3>
      <p className='course_instructor'>{instructor}</p>
      <div className='course_rating'>
        <span>{rating}</span>
        <span className='course_reviews'>({reviews} reviews)</span>
      </div>
      <div className='course_pricing'>
        <span className='new_price'>₹{new_price}</span>
        {old_price && (
          <span className='old_price'>₹{old_price}</span>
        )}
      </div>
    </div>
  );
};

export default Item;
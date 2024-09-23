import React from 'react';

const Item = ({ image, name, instructor, rating, reviews, new_price, old_price }) => {
  return (
    <div className='course_item flex flex-col justify-center rounded-2xl drop-shadow-sm'>
      <img src={image} alt={name} className='w-52 h-52 rounded-2xl object-cover'/>
      <div className='px-5 py-8 mt-5'>
      <h1 className='text-xl text-font font-semibold '>{name}</h1>
      <p>{}</p>
      </div>
    </div>
  );
};

export default Item;
import React from 'react';
import reasonsToChooseUs from "../../Assets/data.js"; // Importing the array
import iconimg from "../../Assets/images/icon-Photoroom.png"
const WhySelect = () => {
  return (
    <>
      <div className="bg-neutral-200 w-full py-16">
        <div className="w-fit rounded-2xl mx-52 p-4 pt-6 pb-4">
          <h2 className="text-3xl text-gray-800 text-center font-bold">
            Why you should
          </h2>
          <h2 className="text-3xl text-gray-800 text-center font-bold mb-8">
            select us over others?
          </h2>
          
          <div className="grid grid-cols-1 h-96 md:grid-cols-3 gap-6">
           
            {reasonsToChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg text-left"
              >
                <img src={iconimg} alt="icon" className='w-28'/>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {reason.heading}
                </h3>
                <p className="text-gray-700 text-font">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySelect;

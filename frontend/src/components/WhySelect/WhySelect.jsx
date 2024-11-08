import React from 'react'
import reasonsToChooseUs from "../../Assets/data.js" // Importing the array
import iconimg from "../../Assets/images/icon-Photoroom.png"

export default function WhySelect() {
  return (
    <div className="bg-neutral-200 w-full py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold">
            Why you should
          </h2>
          <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold mt-1">
            select us over others?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasonsToChooseUs.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-left h-full flex flex-col"
            >
              <img src={iconimg} alt="icon" className="w-20 sm:w-24 md:w-28 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                {reason.heading}
              </h3>
              <p className="text-gray-700 text-font text-sm sm:text-base flex-grow">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';
import imageleft from "../../Assets/images/right2 (4).png"

export default function WhoWeAre() {
  return (
    <div className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img src={imageleft} alt="Who we are" className="w-full h-auto object-cover rounded-lg " />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
              <span className="text-orange-500">Who</span> We Are
            </h1>
            <div className="space-y-4">
              <p className="text-neutral-700 text-font">
                We are a team of three passionate creators building a user-friendly Learning Management System. Our mission is to simplify online education and enhance the learning experience.
              </p>
              <p className="text-neutral-700 text-font">
                Together, we bring expertise in technology, design, and education to create a platform for students and educators. We're committed to making learning accessible and engaging for all.
              </p>
            </div>
            <Link to="/services">
              <button className="bg-neutral-950 px-6 mt-8 py-3 text-white rounded-full hover:bg-neutral-700 transition duration-300 ease-in-out">
                Find More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
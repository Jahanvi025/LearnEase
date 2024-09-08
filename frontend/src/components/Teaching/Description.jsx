import React from 'react'

const Description = () => {
  return (
    <div>
      <div 
        aria-hidden="true" 
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">Pricing</h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">Affordable Pricing</h2>
            <p className="text-lg sm:text-xl text-center mb-6 mt-4">
              <span className="text-3xl sm:text-4xl font-bold text-white">$199</span> / Month
            </p>
            <p className="text-center mb-6">
              Get access to all premium features for just $199 per month. No hidden fees or extra charges.
            </p>
            <a 
              target="_blank" 
              rel="noreferrer"
              className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              href="#contact"
            >
              <span className="relative text-sm font-semibold text-black">Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;

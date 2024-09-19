import React, { useState } from 'react';

const HowToBegin = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Plan your curriculum',
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 pb-40">
            <p className="text-left">Start with your passion and knowledge. Choose a promising topic using the tools provided on the platform.</p>
            <p className="text-left mt-4">The way you teach — how you bring it to life — is entirely up to you.</p>
            <h3 className="text-lg font-semibold text-left mt-6">Find help on the dashboard</h3>
            <p className="text-left mt-2">You can organize your course easily with the instructor dashboard and curriculum pages.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg"
              alt="Plan your curriculum"
              className="w-full h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Record your lectures',
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 pb-40">
            <p className="text-left">Use basic tools like a smartphone or a DSLR camera. Add a microphone for better audio quality.</p>
            <p className="text-left mt-4">If you prefer not to be on camera, you can capture your screen instead.</p>
            <h3 className="text-lg font-semibold text-left mt-6">Find instructions on the dashboard</h3>
            <p className="text-left mt-2">Once you're done recording, upload your lectures to the website.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://s.udemycdn.com/teaching/record-your-video-v3.jpg"
              alt="Record your lectures"
              className="w-full h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Launch your course',
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 pb-40">
            <p className="text-left">After recording and uploading your lectures, publish your course on the platform.</p>
            <p className="text-left mt-4">Your course will be available to learners and ready for enrollment.</p>
            <h3 className="text-lg font-semibold text-left mt-6">Find instructions on the dashboard</h3>
            <p className="text-left mt-2">Promote your course through your network and start teaching.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://s.udemycdn.com/teaching/launch-your-course-v3.jpg"
              alt="Launch your course"
              className="w-full h-auto"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto pt-8 pb-2 px-24 mt-14 mb-4">
      <h2 className="text-5xl font-medium font-serif text-center mb-8">How to Begin</h2>

      {/* Tab Navigation */} 
      <div className="flex justify-center  space-x-4 mb-6 border-b-2 border-orange-500">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-2 text-xl  ${
              activeTab === index
                ? ' text-orange-500'
                : ' text-neutral-950'
            } hover:border-orange-500 hover:text-orange-500 transition`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 text-font">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default HowToBegin;

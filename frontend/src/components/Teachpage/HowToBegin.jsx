import React, { useState } from 'react';

const HowToBegin = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Plan your curriculum',
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 ">
            <p className="text-left">Start with your passion and knowledge. Choose a promising topic using the tools provided on the platform.</p>
            <p className="text-left mt-4">The way you teach — how you bring it to life — is entirely up to you.</p>
            <h3 className="text-lg font-semibold text-left mt-6">Find help on the dashboard</h3>
            <p className="text-left mt-2">You can organize your course easily with the instructor dashboard and curriculum pages.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/female-web-designer-office-with-notebook_23-2149749855.jpg?t=st=1729899061~exp=1729902661~hmac=10e9e6a423e8f80ad32c11db51b2df927150a94dadd778ca7ebb3a5ef08f7919&w=996"
              alt="Plan your curriculum"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Record your lectures',
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 ">
            <p className="text-left">Use basic tools like a smartphone or a DSLR camera. Add a microphone for better audio quality.</p>
            <p className="text-left mt-4">If you prefer not to be on camera, you can capture your screen instead.</p>
            <h3 className="text-lg font-semibold text-left mt-6">Find instructions on the dashboard</h3>
            <p className="text-left mt-2">Once you're done recording, upload your lectures to the website.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/student-online-cute-girl-glasses-sweater-studying-computer-typing-keyboard_140725-164206.jpg?t=st=1729898930~exp=1729902530~hmac=b33266aae399702b198fe99a3ab72fcc4234e451c84dfea7bb7edd43c1e16dd8&w=996"
              alt="Record your lectures"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Launch your course',
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 ">
            <p className="text-left">After recording and uploading your lectures, publish your course on the platform.</p>
            <p className="text-left mt-4">Your course will be available to learners and ready for enrollment.</p>
            <h3 className="text-lg font-semibold text-left mt-6">Find instructions on the dashboard</h3>
            <p className="text-left mt-2">Promote your course through your network and start teaching.</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/business-people-using-computers-dark-office_74855-2617.jpg?t=st=1729899143~exp=1729902743~hmac=d978360798a23eb71157988d1f9ea03405861fbf7e32bfe9651a8e1fafaa52f6&w=996"
              alt="Launch your course"
              className="w-full h-auto rounded-2xl"
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

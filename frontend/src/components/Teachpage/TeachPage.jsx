import React from 'react';

const TeachPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 my-16">
      <h2 className="text-5xl font-medium font-serif text-center mb-14">So many reasons to start</h2>
      <div className="flex flex-col md:flex-row justify-center gap-20 space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Teach your way */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <img
              src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg"
              srcSet="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg 1x, https://s.udemycdn.com/teaching/value-prop-teach-2x-v3.jpg 2x"
              alt="Teach your way"
              className="w-24 h-24"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Teach your way</h3>
          <p className="text-neutral-900 text-font">
            Publish the course you want, in the way you want, and always have control of your own content.
          </p>
        </div>

        {/* Inspire learners */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <img
              src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg"
              srcSet="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg 1x, https://s.udemycdn.com/teaching/value-prop-inspire-2x-v3.jpg 2x"
              alt="Inspire learners"
              className="w-24 h-24"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Inspire learners</h3>
          <p className="text-neutral-900 text-font">
            Teach what you know and help learners explore their interests, gain new skills, and advance their careers.
          </p>
        </div>

        {/* Get rewarded */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <img
              src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg"
              srcSet="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg 1x, https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg 2x"
              alt="Get rewarded"
              className="w-24 h-24"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Get rewarded</h3>
          <p className="text-neutral-900 text-font">
            Expand your professional network, build your expertise, and earn money on each paid enrollment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeachPage;

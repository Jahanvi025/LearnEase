import React from 'react';
import { useNavigate , Link} from 'react-router-dom';

const BecomeInstructor = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/admin'); // Navigate to your admin page
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-serif font-medium mb-6">
          Become an instructor today
        </h2>
        <p className="text-xl text-font mb-8">
          Join one of the world’s largest online learning marketplaces.
        </p>
        <Link to="/Learn-hub-admin">
        <button
          type="button"
          className="px-16 text-font py-3 font-medium rounded-2xl text-white bg-neutral-900 hover:bg-orange-500 transition"
          onClick={handleGetStarted}
        >
          Get started
        </button>
        </Link>
      </div>
    </div>
  );
};

export default BecomeInstructor;

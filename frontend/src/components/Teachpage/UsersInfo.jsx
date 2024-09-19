import React from 'react';

const UsersInfo = () => {
  const stats = [
    { value: '80K', label: 'Students' },
    { value: '100K', label: 'Enrollments' },
    { value: '10+', label: 'Languages' },
    { value: '50+', label: 'Teachers' },
    { value: '16,000+', label: 'Enterprise customers' },
  ];

  return (
    <div className="py-12 bg-orange-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-20 justify-center items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center mx-4 my-4">
              <div className="text-5xl font-bold text-white">{stat.value}</div>
              <p className="text-white mt-2 text-font">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersInfo;

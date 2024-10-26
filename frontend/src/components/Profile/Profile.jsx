import React from 'react';

// Main Profile component
const Profile = ({
  name = "John Doe", 
  email = "john@example.com", 
  courses = [
    { id: 1, title: "Introduction to React", description: "Learn the basics of React and build your first app.", progress: 60, image: "/placeholder.svg?height=100&width=200" },
    { id: 2, title: "Advanced JavaScript", description: "Deep dive into advanced JavaScript concepts and patterns.", progress: 30, image: "/placeholder.svg?height=100&width=200" },
    { id: 3, title: "CSS Mastery", description: "Master CSS and create stunning layouts and animations.", progress: 90, image: "/placeholder.svg?height=100&width=200" },
    { id: 4, title: "Node.js Fundamentals", description: "Build server-side applications with Node.js and Express.", progress: 45, image: "/placeholder.svg?height=100&width=200" },
    { id: 5, title: "Python for Data Science", description: "Learn Python programming and data analysis techniques.", progress: 75, image: "/placeholder.svg?height=100&width=200" },
    { id: 6, title: "React Native Basics", description: "Build mobile apps using React Native.", progress: 50, image: "/placeholder.svg?height=100&width=200" },
    { id: 7, title: "DevOps Essentials", description: "Understand the basics of DevOps practices.", progress: 20, image: "/placeholder.svg?height=100&width=200" },
    { id: 8, title: "Introduction to TypeScript", description: "Get started with TypeScript and its features.", progress: 85, image: "/placeholder.svg?height=100&width=200" },
  ]
}) => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white shadow-lg border border-orange-500 mb-8 rounded-lg">
          <div className="border-b border-orange-200 p-6 flex flex-col md:flex-row md:items-center md:space-x-4">
            <img
              src="/placeholder.svg?height=96&width=96"
              alt={name}
              className="w-24 h-24 mb-4 md:mb-0 rounded-full border-2 border-orange-500"
            />
            <div>
              <h1 className="text-3xl md:text-4xl text-black mb-2">{name}</h1>
              <p className="text-gray-600 text-lg">{email}</p>
            </div>
          </div>
        </div>

        {/* Enrolled Courses Section */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Enrolled Courses</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-lg">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-black">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-orange-500 h-2.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
                    {course.progress}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, Users, BarChart, Layout, Accessibility, Settings } from "lucide-react";
import React from 'react';

export default function Service() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/courses'); // Navigate to your courses page
  };

  const services = [
    {
      title: "Course Management",
      description: "Create, organize, and manage courses with ease. Upload materials, set assignments, and track progress.",
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      image: "https://img.freepik.com/free-vector/student-using-laptop-studying-desk_1262-21429.jpg?t=st=1729898004~exp=1729901604~hmac=6371c3d66bf13f84755ef0297485ab4e93e231e54d57ace7f0a90e1c34f24ad7&w=996",
    },
    {
      title: "User Management",
      description: "Manage students, instructors, and administrators. Control access levels and permissions.",
      icon: <Users className="h-8 w-8 text-orange-500" />,
      image: "https://img.freepik.com/free-photo/networking-concept-still-life-composition_23-2149035676.jpg?t=st=1729898575~exp=1729902175~hmac=33433115e185604b9437786534265190b5c1030068b046f527af15bc7101b47d&w=996",
    },
    {
      title: "Analytics and Reporting",
      description: "Get insights into student performance, course engagement, and overall system usage.",
      icon: <BarChart className="h-8 w-8 text-orange-500" />,
      image: "https://img.freepik.com/free-vector/illustration-business-graph-analysis_53876-36922.jpg?t=st=1729898408~exp=1729902008~hmac=7b5c998459886bfd236468a78eac7c94235fbce3eeba0db7b7dbfa9bdf490f37&w=740",
    },
    {
      title: "High-Quality Structured Courses",
      description: "Offer well-structured and easy-to-navigate courses, ensuring students receive a comprehensive learning experience.",
      icon: <Layout className="h-8 w-8 text-orange-500" />,
      image: "https://img.freepik.com/free-photo/flat-lay-workspace-concept-with-orange-background_23-2148226895.jpg?t=st=1729898264~exp=1729901864~hmac=4226b6c122400e6689af61b1a920c60638bd36c77806e12b52c5ff0d19f028a5&w=996",
    },
    {
      title: "Easy User Access",
      description: "Ensure seamless user experience with intuitive navigation and quick access to courses and learning materials.",
      icon: <Accessibility className="h-8 w-8 text-orange-500" />,
      image: "https://img.freepik.com/free-vector/hand-drawn-man-working-from-home_23-2148818123.jpg?t=st=1729898463~exp=1729902063~hmac=8dd30c19fc259d7c0ab8c1aeff542b5d29194d5bb70270aba2a3811baab22999&w=740",
    },
    {
      title: "Integration Support",
      description: "Seamlessly integrate with third-party tools and services to enhance your learning platform.",
      icon: <Settings className="h-8 w-8 text-orange-500" />,
      image: "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-28461.jpg?t=st=1729898330~exp=1729901930~hmac=4ed6b0876915fdde9408493158db31e882cee92fbd8082aec0bb456fab1d0958&w=740",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <img
          src="https://img.freepik.com/free-photo/side-view-man-living-as-digital-nomad_23-2151205437.jpg?t=st=1729898519~exp=1729902119~hmac=dade8195a14b3b21cfadfc7ca5e47c7972b09cfc297b2dea36bb1e4b3603f6f2&w=1060"
          alt="Learning Management System"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-lg inline-block">
          <h1 className="text-4xl font-bold text-orange-500 mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-800 text-font">
            Empower your learning management system with our comprehensive suite of services.
          </p>
        </div>
      </header>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-neutral-200 border-2 shadow-lg rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="p-4">
                <h2 className="flex items-center text-orange-500 text-xl font-semibold">
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </h2>
                <p className="text-gray-600 text-font mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-orange-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to enhance your learning platform?</h2>
          <p className="text-xl text-white mb-8 text-font">
            Contact us today to learn more about how our services can benefit your organization.
          </p>
          <Link to="/courses">
            <button
              type='button'
              onClick={handleGetStarted}
              className="bg-white text-orange-500 hover:bg-neutral-300 transition-colors duration-300 font-semibold py-2 px-4 rounded"
            >
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

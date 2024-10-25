import { useNavigate , Link} from 'react-router-dom';
import { BookOpen, Users, BarChart, Layout, Accessibility, Settings } from "lucide-react";
import React from 'react';
import img1 from "../../Assets/images/side-view-man-living-as-digital-nomad.jpg";
import img2 from "../../Assets/images/21429.jpg"
import img3 from "../../Assets/images/networking-concept-still-life-composition.jpg"
import img4 from "../../Assets/images/36922.jpg"
import img5 from "../../Assets/images/flat-lay-workspace-concept-with-orange-background.jpg"
import img6 from "../../Assets/images/4882404.jpg"
import img7 from "../../Assets/images/28461.jpg";

export default function Service() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/courses'); // Navigate to your admin page
  };
  const services = [
    {
      title: "Course Management",
      description: "Create, organize, and manage courses with ease. Upload materials, set assignments, and track progress.",
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      image: img2, // Replace with your actual image path
    },
    {
      title: "User Management",
      description: "Manage students, instructors, and administrators. Control access levels and permissions.",
      icon: <Users className="h-8 w-8 text-orange-500" />,
      image: img3, // Replace with your actual image path
    },
    {
      title: "Analytics and Reporting",
      description: "Get insights into student performance, course engagement, and overall system usage.",
      icon: <BarChart className="h-8 w-8 text-orange-500" />,
      image: img4, // Replace with your actual image path
    },
    {
      title: "High-Quality Structured Courses",
      description: "Offer well-structured and easy-to-navigate courses, ensuring students receive a comprehensive learning experience.",
      icon: <Layout className="h-8 w-8 text-orange-500" />,
      image: img5, // Replace with your actual image path
    },
    {
      title: "Easy User Access",
      description: "Ensure seamless user experience with intuitive navigation and quick access to courses and learning materials.",
      icon: <Accessibility className="h-8 w-8 text-orange-500" />,
      image: img6, // Replace with your actual image path
    },
    {
      title: "Integration Support",
      description: "Seamlessly integrate with third-party tools and services to enhance your learning platform.",
      icon: <Settings className="h-8 w-8 text-orange-500" />,
      image: img7, // Replace with your actual image path
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <img
          src={img1} // Replace with your actual header image path
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-neutral-300 border-2 shadow-lg rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
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
          <button type='button' onClick={handleGetStarted} className="bg-white text-orange-500 hover:bg-neutral-300 transition-colors duration-300 font-semibold py-2 px-4 rounded">
            Get Started
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

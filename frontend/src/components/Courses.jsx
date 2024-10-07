import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// REUDX
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../redux/slice/admin/coursesSlice";
import "./Courses.css"; // Import your custom CSS file to override Slick styles

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const groupedCoursesByCategory = () => {
    return courses.reduce((groupedCourse, course) => {
      const category = course.category;
      if (!groupedCourse[category]) {
        groupedCourse[category] = [];
      }
      groupedCourse[category].push(course);
      return groupedCourse;
    }, {});
  };

  const groupedCourses = groupedCoursesByCategory();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  

  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Our Courses
        </h1>

        {Object.keys(groupedCourses).map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              {category}
            </h3>

          <div className="w-full rounded-lg  " >
              <Slider {...settings}  className="rounded-lgw-full ">
                {groupedCourses[category].map((course) => (
                  <div key={course.id} className="px-2 py-4 mx-10 h-80 w-56 bg-yellow-500 shadow-lg rounded-lg">
                    <img src={course.thumbnail} alt={course.title} className="w-64 h-40 object-cover rounded-lg"/>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.description}</p>
                      </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;

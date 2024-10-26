import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../redux/slice/admin/coursesSlice";
import { Link } from "react-router-dom";
import "./Courses.css";
import ratingstar from "../Assets/images/half-tiny-star.png";
import ratingstar2 from "../Assets/images/star (3).png";

// Custom Arrow Component
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent : "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "black",
        borderRadius: "50%",
        padding: "20px",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <span className="text-white text-2xl text-center mr-4">&#11166;</span> 
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick, showArrow } = props; // Accept showArrow prop
  if (!showArrow) return null; // Don't render if showArrow is false

  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent : "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "black",
        borderRadius: "50%",
        padding: "20px",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <span className="text-white text-2xl text-center mr-5">&#11164;</span> 
    </div>
  );
};

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  
  // State to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

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
    dots: false, // Remove dots
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />, // Custom next arrow
    prevArrow: <CustomPrevArrow showArrow={currentSlide > 0} />, // Show left arrow conditionally
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
    arrows: true,
  };

  return (
    <>
      <hr className="shadow-sm" />

      <div className="container mx-auto">
        <h1 className="text-left text-3xl font-bold text-neutral-950 mt-8 mb-1">
          Courses to get you started
        </h1>
        <p className="text-font text-left text-neutral-600 mb-8">
          Explore courses from experienced, real-world experts.
        </p>

        {Object.keys(groupedCourses).map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 capitalize">
              {category}
            </h3>

            <div className="rounded-2xl">
              <Slider {...settings} className="rounded-2xl">
                {groupedCourses[category].map((course) => (
                  <Link
                    to={`/course/${course._id}`}
                    key={course.id}
                    className="mx-5 h-80 w-[60%] bg-white border-2 border-neutral-200 shadow-lg rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
                  >
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="h-40 w-full object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-800 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-xs text-neutral-500 text-font">
                        {course.description.split(" ").slice(0, 10).join(" ")}
                        {course.description.split(" ").length > 10 && "..."}
                      </p>
                      <div className="flex flex-row mt-2 gap-2">
                        <p className="text-sm text-neutral-900 text-font">4.5</p>
                        <div className="flex flex-row gap-1">
                          <img src={ratingstar2} alt="star" className="w-4 h-4" />
                          <img src={ratingstar2} alt="star" className="w-4 h-4" />
                          <img src={ratingstar2} alt="star" className="w-4 h-4" />
                          <img src={ratingstar2} alt="star" className="w-4 h-4" />
                          <img src={ratingstar} alt="star" className="w-4 h-4" />
                        </div>
                        <p className="text-xs text-neutral-500 text-font">
                          ({course.price})
                        </p>
                      </div>
                    </div>
                  </Link>
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

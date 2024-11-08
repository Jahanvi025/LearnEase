import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourseById } from "../../redux/slice/admin/coursesSlice";
import { fetchContentByCourseID } from "../../redux/slice/admin/contentSlice";

export default function CourseLectures() {
  const [selectedContent, setSelectedContent] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  const course = useSelector(state => state.courses);
  const content = useSelector(state => state.content);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseById(id));
      dispatch(fetchContentByCourseID(id));
    }
  }, [dispatch, id]);

  if (course.status === 'loading' || course.status === 'idle') {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-12 h-12 border-4 border-orange-500 border-solid border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (course.status === 'failed') {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <h1 className="text-2xl font-bold text-red-500">Failed to Load</h1>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-orange-50 min-h-screen">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <header className="bg-white shadow-lg rounded-lg p-6 mb-8 border-2 border-orange-500">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            {course.course?.course?.title || 'Course Title'}
          </h1>
        </header>
        <main className="flex lg:flex-row flex-col-reverse gap-8">
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-black flex items-center">
              <span className="mr-2 text-orange-500">📙</span> 
              Course Content
            </h2>
            <ul className="space-y-2">
              {content.content.map((item, index) => (
                <li key={index} className="border-b border-gray-200 pb-2">
                  <button
                    onClick={() => setSelectedContent(item)}
                    className={`w-full p-3 text-left rounded-md transition-all duration-300 transform hover:scale-105 flex items-center ${
                      selectedContent === item
                        ? 'bg-orange-500 text-white'
                        : 'hover:bg-orange-100 text-black'
                    }`}
                  >
                      <span className={`mr-2 ${selectedContent === item ? 'text-white' : 'text-black'}`}>
                      ➔ {/* Black arrow icon */}
                    </span>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-2/3">
            {selectedContent ? (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:shadow-2xl">
                <h2 className="text-2xl font-bold p-6 bg-orange-500 text-white">{selectedContent.title}</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer
                    url={selectedContent.contentUrl}
                    controls
                    width="100%"
                    height="100%"
                    className="rounded-b-lg"
                  />
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col items-center justify-center h-64 bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-300 transform hover:shadow-2xl"
                style={{
                  backgroundImage: `url('/path/to/your/background-image.jpg')`, // Replace with the actual image path
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="bg-white bg-opacity-70 rounded p-4 text-center">
                  <span className="text-orange-500 mb-4 text-4xl">📙</span> {/* Orange book icon */}
                  <p className="text-xl text-black">Select a lesson to start learning</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

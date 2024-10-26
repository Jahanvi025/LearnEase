import React, { useEffect, useState } from 'react';
import courseimg from "../../Assets/images/programming-background-collage.jpg";
import checkmark from "../../Assets/images/check-mark.png";
import { useParams } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCourseById } from "../../redux/slice/admin/coursesSlice";

const CourseLecture = () => {
  const [course, setCourse] = useState({
    title: '',
    category: '',
    price: '',
    thumbnail: '',
    description: '',
    tags: [],
    syllabus: [],
    content: []
  });

  const { id } = useParams();
  const dispatch = useDispatch();

  const subject = useSelector(state => state.courses.course);
  const userInfo = useSelector((state) => state.user);


  useEffect(() => {
    if (id) {
      dispatch(fetchCourseById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (subject) {
      setCourse(subject.course);
    }
  }, [subject]);

  const isEnrolled = userInfo.user?.courses?.includes(id);

console.log(isEnrolled);

  return (
      <div className="!visible transition-opacity duration-150 bg-background text-foreground !opacity-100">
        <div className="container mx-auto py-8">
          <main>
            <div className="mb-8 w-full relative rounded-2xl overflow-hidden">
              <img
                  src={courseimg}
                  alt="Advanced React and Next.js Development course coverpage"
                  className="w-[100%] h-[28rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
                <p className="text-xl text-font">Master the art of building scalable and performant web applications</p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="rounded-2xl border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Course Overview</h3>
                    <p className="text-sm text-muted-foreground">What you'll learn in this course</p>
                  </div>
                  <div className="p-6">
                    <p  className="mb-4 text-font">
                      <div dangerouslySetInnerHTML={{ __html: course.description }}></div>
                    </p>
                    <h2 className="text-2xl font-semibold mb-2">Key Topics</h2>
                    <ul className="space-y-2">
                      {course.syllabus.map((syllabus, index) => (
                          <li key={index} className="flex items-center">
                            <img src={checkmark} alt="checkmark" className='w-8 h-8' />
                            {syllabus}
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6 mt-6">
                  <div className="rounded-2xl border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Course Details</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock mr-0 h-6 w-6">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>Duration: 12 weeks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap mr-0 h-6 w-6">
                          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                          <path d="M22 10v6" />
                          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                        </svg>
                        <span>Level: Advanced</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users mr-0 h-6 w-6">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        <span>Students: 1,234</span>
                      </div>
                      {userInfo.isAuthenticated ? (
                          isEnrolled ? (
                              <button className="w-full h-10 bg-neutral-950 text-orange-500 rounded-2xl hover:text-orange-300 hover:bg-neutral-800">
                                Already Enrolled
                              </button>
                          ) : (
                              <button className="w-full h-10 bg-neutral-950 text-orange-500 rounded-2xl hover:text-orange-300 hover:bg-neutral-800">
                                Enroll Now
                              </button>
                          )
                      ) : (
                          <div>
                            <h1>Login</h1>
                            <h2>to enroll</h2>
                          </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <aside className="hidden md:block">
                <div className="space-y-6">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6 bg-neutral-950">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-white">Instructor</h3>
                      <p className="text-sm text-muted-foreground text-orange-500">John Doe</p>
                    </div>
                    <div className="p-6 bg-neutral-950">
                      <p className='text-font text-white'>
                        John is a seasoned web developer with over 10 years of experience in building scalable applications using React and Next.js. He is passionate about teaching and helping students become proficient in modern web development.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Related Information</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-between p-4 border-b">
                          <span>Lifetime Access</span>
                          <span className="text-muted-foreground text-font">Revisit the course content anytime</span>
                        </li>
                        <li className="flex items-center justify-between p-4 border-b">
                          <span>Video Lectures</span>
                          <span className="text-muted-foreground text-font">50+ hours of in-depth video content</span>
                        </li>
                        <li className="flex items-center justify-between p-4 border-b">
                          <span>Community Access</span>
                          <span className="text-muted-foreground text-font">Join our vibrant developer community</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
  );
};

export default CourseLecture;
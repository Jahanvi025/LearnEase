import './App.css';
import './tailwind.css';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import HomeHoc from './HOC/Home.HOC.jsx';
import HomePage from './pages/HomePage.jsx';
import Signin from './components/Auth/Signin.jsx';
import Courses from './components/Courses.jsx';
import SignUp from './components/Auth/SignUp.jsx';
import VerifyOtp from "./components/Auth/VerifyOtp";
import AdminAuth from "./components/Admin/Auth/AdminAuth";
import AdminHOC from "./HOC/Admin.HOC";
import DashboardPage from "./pages/DashboardPage";

// Redux
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { fetchUser } from "./redux/slice/userSlice";
import Custom404 from "./components/NotFound";
import addCourse from "./components/Admin/Courses/addCourse";
import SingleCoursePage from "./components/Admin/Courses/singleCourse";
import teaching from "./components/Teaching/Teaching";
import teachingPage from "./pages/TeachingPage";
import searchResult from "./components/Courses/searchResult";

const allCourses = lazy(() => import('./components/Admin/Courses/allCourses'));

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (Cookies.get('token')) {
            dispatch(fetchUser())
        }
    }, [dispatch]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* Home Routes */}
                <Route path="/" element={<HomeHoc component={HomePage} />} />
                <Route path="/login" element={<HomeHoc component={Signin} />} />
                <Route path="/signUp" element={<HomeHoc component={SignUp} />} />
                <Route path="/Courses" element={<HomeHoc component={Courses} />} />
                <Route path="/verify-otp" element={<HomeHoc component={VerifyOtp} />} />
                <Route path="/teaching" element={<HomeHoc component={teachingPage}/> }/>
                <Route path="/search" element={<HomeHoc component={searchResult}/> }/>

                {/* Admin Routes */}
                <Route path="/Learn-Hub-admin" element={<AdminAuth />} />
                <Route path="/admin/dashboard" element={<AdminHOC component={DashboardPage} />} />
                <Route path="/admin/courses/add-course" element={<AdminHOC component={addCourse} />} />
                <Route path="/admin/courses" element={<AdminHOC component={allCourses} />} />
                <Route path="/admin/courses/:id" element={<AdminHOC component={SingleCoursePage}/>} />

                {/* 404 Route */}
                <Route path="*" element={<Custom404 />} />
            </Routes>
        </Suspense>
    );
}

export default App;

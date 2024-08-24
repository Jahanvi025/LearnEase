import './App.css';
import './tailwind.css';
import React, {useEffect} from 'react';

//Component
import HomeHoc from './HOC/Home.HOC.jsx';
import HomePage from './pages/HomePage.jsx';
import Signin from './components/Auth/Signin.jsx';
import Courses from './components/Courses.jsx';
import SignUp from './components/Auth/SignUp.jsx';
import VerifyOtp from "./components/Auth/VerifyOtp";

//Redux
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {fetchUser} from "./redux/slice/userSlice";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (Cookies.get('token')) {
            dispatch(fetchUser())
        }
    }, [dispatch]);
    return (
        <>
            <HomeHoc exact component={HomePage} path="/"/>
            <HomeHoc exact component={Signin} path='/login'/>
            <HomeHoc exact component={SignUp} path='/signUp'/>
            <HomeHoc exact component={Courses} path="/Courses"/>
            <HomeHoc exact component={VerifyOtp} path="/verify-otp"/>
        </>
    );
}

export default App;

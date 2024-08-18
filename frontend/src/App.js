import './App.css';
import './tailwind.css';
import React from 'react';
import HomeHoc from './HOC/Home.HOC.jsx';
import HomePage from './pages/HomePage.jsx';
import Signin from './components/Signin.jsx';
import Courses from './components/Courses.jsx';
import SignUp from './components/SignUp.jsx';
function App() {
  return (
    <>
      <HomeHoc exact component={HomePage} path="/" />
      <HomeHoc exact component={Signin} path='/login'/>
      <HomeHoc exact component={SignUp} path='/signUp'/>
      <HomeHoc exact component={Courses} path="/Courses" />
    </>
  );
}

export default App;
